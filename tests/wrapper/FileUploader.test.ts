import { FileUploader } from "../../src/wrapper/tools/FileUploader";
import { BadRequestError, NotFoundError, InternalServerError } from "../../src/api/errors";
import * as fs from "fs";
import * as mime from "mime-types";

// Mock fs promises
jest.mock("fs", () => ({
    promises: {
        stat: jest.fn(),
        readFile: jest.fn(),
    },
}));

// Mock mime-types
jest.mock("mime-types", () => ({
    lookup: jest.fn(),
}));

// Mock fetch globally
global.fetch = jest.fn();

describe("FileUploader", () => {
    let fileUploader: FileUploader;
    const mockApiKey = "test-api-key";
    const mockBaseURL = "https://api.example.com";

    beforeEach(() => {
        fileUploader = new FileUploader({
            apiKey: mockApiKey,
            environment: mockBaseURL,
        });

        // Reset all mocks
        jest.clearAllMocks();
        (global.fetch as jest.Mock).mockReset();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("uploadFromPath", () => {
        const mockFilePath = "/path/to/test/file.jpg";
        const mockFileContent = Buffer.from("test file content");
        const mockStats = {
            isDirectory: () => false,
            size: 1024,
        };
        const mockUploadResult = {
            uploadUrl: "https://upload.example.com/presigned-url",
            downloadUrl: "https://storage.example.com/file.jpg",
            metadata: {
                fileName: "file.jpg",
                contentType: "image/jpeg",
                expiresAt: "2025-06-30T12:00:00.000Z",
            },
        };

        describe("successful uploads", () => {
            beforeEach(() => {
                // Mock file exists and is a regular file
                (fs.promises.stat as jest.Mock).mockResolvedValue(mockStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(mockFileContent);
                (mime.lookup as jest.Mock).mockReturnValue("image/jpeg");

                // Mock the upload method
                jest.spyOn(fileUploader, "upload").mockResolvedValue(mockUploadResult);

                // Mock successful fetch
                (global.fetch as jest.Mock).mockResolvedValue({
                    ok: true,
                    status: 200,
                });
            });

            it("should successfully upload a file with default options", async () => {
                const result = await fileUploader.uploadFromPath(mockFilePath);

                expect(fs.promises.stat).toHaveBeenCalledWith(mockFilePath);
                expect(fileUploader.upload).toHaveBeenCalledWith(
                    {
                        contentType: "image/jpeg",
                        size: 1024,
                        name: "file.jpg",
                        options: undefined,
                    },
                    undefined
                );
                expect(fs.promises.readFile).toHaveBeenCalledWith(mockFilePath);
                expect(global.fetch).toHaveBeenCalledWith(
                    mockUploadResult.uploadUrl,
                    expect.objectContaining({
                        method: "PUT",
                        body: expect.any(Blob),
                        headers: {
                            "Content-Type": "image/jpeg",
                        },
                    })
                );
                expect(result).toEqual(mockUploadResult);
            });

            it("should upload a file with custom options", async () => {
                const customOptions = {
                    contentType: "image/png",
                    name: "custom-name.png",
                    options: {
                        download: {
                            expiresAt: "2025-06-30T12:00:00.000Z",
                        },
                    },
                };

                const result = await fileUploader.uploadFromPath(mockFilePath, customOptions);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    {
                        contentType: "image/png",
                        size: 1024,
                        name: "custom-name.png",
                        options: {
                            download: {
                                expiresAt: "2025-06-30T12:00:00.000Z",
                            },
                        },
                    },
                    undefined
                );
                expect(global.fetch).toHaveBeenCalledWith(
                    mockUploadResult.uploadUrl,
                    expect.objectContaining({
                        headers: {
                            "Content-Type": "image/png",
                        },
                    })
                );
                expect(result).toEqual(mockUploadResult);
            });

            it("should upload a file when uploadUrl is not provided", async () => {
                const resultWithoutUrl = { ...mockUploadResult, uploadUrl: undefined };
                (fileUploader.upload as jest.Mock).mockResolvedValue(resultWithoutUrl);

                const result = await fileUploader.uploadFromPath(mockFilePath);

                expect(fs.promises.readFile).not.toHaveBeenCalled();
                expect(global.fetch).not.toHaveBeenCalled();
                expect(result).toEqual(resultWithoutUrl);
            });

            it("should pass through request options", async () => {
                const requestOptions = { timeoutInSeconds: 5 };

                await fileUploader.uploadFromPath(mockFilePath, {}, requestOptions);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.any(Object),
                    requestOptions
                );
            });
        });

        describe("MIME type handling", () => {
            beforeEach(() => {
                (fs.promises.stat as jest.Mock).mockResolvedValue(mockStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(mockFileContent);
                jest.spyOn(fileUploader, "upload").mockResolvedValue(mockUploadResult);
                (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
            });

            it("should detect and use supported MIME types", async () => {
                const supportedTypes = [
                    "audio/mpeg",
                    "video/mp4",
                    "image/png",
                    "application/pdf",
                    "text/csv",
                ];

                for (const mimeType of supportedTypes) {
                    (mime.lookup as jest.Mock).mockReturnValue(mimeType);

                    await fileUploader.uploadFromPath(mockFilePath);

                    expect(fileUploader.upload).toHaveBeenCalledWith(
                        expect.objectContaining({ contentType: mimeType }),
                        undefined
                    );
                }
            });

            it("should handle unsupported MIME types with warning", async () => {
                const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
                (mime.lookup as jest.Mock).mockReturnValue("audio/x-custom");

                await fileUploader.uploadFromPath(mockFilePath);

                expect(consoleWarnSpy).toHaveBeenCalledWith(
                    "MIME type audio/x-custom may not be fully supported. Proceeding anyway."
                );
                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({ contentType: "audio/x-custom" }),
                    undefined
                );

                consoleWarnSpy.mockRestore();
            });

            it("should fallback to application/octet-stream for unknown MIME types", async () => {
                (mime.lookup as jest.Mock).mockReturnValue(null);

                await fileUploader.uploadFromPath(mockFilePath);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({ contentType: "application/octet-stream" }),
                    undefined
                );
            });

            it("should fallback to application/octet-stream for unsupported non-media types", async () => {
                (mime.lookup as jest.Mock).mockReturnValue("application/x-custom");

                await fileUploader.uploadFromPath(mockFilePath);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({ contentType: "application/octet-stream" }),
                    undefined
                );
            });
        });

        describe("error handling", () => {
            it("should throw NotFoundError for non-existent files", async () => {
                const enoentError: any = new Error("File not found");
                enoentError.code = "ENOENT";
                (fs.promises.stat as jest.Mock).mockRejectedValue(enoentError);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(NotFoundError);
                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(
                    `File not found: ${mockFilePath}`
                );
            });

            it("should throw BadRequestError for directories", async () => {
                const dirStats = {
                    isDirectory: () => true,
                    size: 0,
                };
                (fs.promises.stat as jest.Mock).mockResolvedValue(dirStats);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(BadRequestError);
                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(
                    `Path is a directory, not a file: ${mockFilePath}`
                );
            });

            it("should throw InternalServerError for permission errors", async () => {
                const permissionError: any = new Error("Permission denied");
                permissionError.code = "EACCES";
                (fs.promises.stat as jest.Mock).mockRejectedValue(permissionError);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(InternalServerError);
                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(
                    "Failed to access file: Permission denied"
                );
            });

            it("should throw InternalServerError for disk errors", async () => {
                const diskError: any = new Error("Disk full");
                diskError.code = "ENOSPC";
                (fs.promises.stat as jest.Mock).mockRejectedValue(diskError);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(InternalServerError);
                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(
                    "Failed to access file: Disk full"
                );
            });

            it("should handle file read errors", async () => {
                (fs.promises.stat as jest.Mock).mockResolvedValue(mockStats);
                (mime.lookup as jest.Mock).mockReturnValue("image/jpeg");
                jest.spyOn(fileUploader, "upload").mockResolvedValue(mockUploadResult);

                const readError = new Error("Failed to read file");
                (fs.promises.readFile as jest.Mock).mockRejectedValue(readError);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(readError);
            });

            it("should handle upload method failures", async () => {
                (fs.promises.stat as jest.Mock).mockResolvedValue(mockStats);
                (mime.lookup as jest.Mock).mockReturnValue("image/jpeg");

                const uploadError = new Error("Upload failed");
                jest.spyOn(fileUploader, "upload").mockRejectedValue(uploadError);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(uploadError);
            });

            it("should handle fetch failures", async () => {
                (fs.promises.stat as jest.Mock).mockResolvedValue(mockStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(mockFileContent);
                (mime.lookup as jest.Mock).mockReturnValue("image/jpeg");
                jest.spyOn(fileUploader, "upload").mockResolvedValue(mockUploadResult);

                const fetchError = new Error("Network error");
                (global.fetch as jest.Mock).mockRejectedValue(fetchError);

                await expect(fileUploader.uploadFromPath(mockFilePath)).rejects.toThrow(fetchError);
            });
        });

        describe("edge cases", () => {
            beforeEach(() => {
                (fs.promises.stat as jest.Mock).mockResolvedValue(mockStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(mockFileContent);
                jest.spyOn(fileUploader, "upload").mockResolvedValue(mockUploadResult);
                (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
            });

            it("should handle files with no extension", async () => {
                const noExtPath = "/path/to/file";
                (mime.lookup as jest.Mock).mockReturnValue(null);

                await fileUploader.uploadFromPath(noExtPath);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({
                        name: "file",
                        contentType: "application/octet-stream",
                    }),
                    undefined
                );
            });

            it("should handle files with multiple dots in name", async () => {
                const multiDotPath = "/path/to/file.test.backup.jpg";
                (mime.lookup as jest.Mock).mockReturnValue("image/jpeg");

                await fileUploader.uploadFromPath(multiDotPath);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({
                        name: "file.test.backup.jpg",
                    }),
                    undefined
                );
            });

            it("should handle empty files", async () => {
                const emptyStats = {
                    isDirectory: () => false,
                    size: 0,
                };
                (fs.promises.stat as jest.Mock).mockResolvedValue(emptyStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(Buffer.from(""));
                (mime.lookup as jest.Mock).mockReturnValue("text/plain");

                await fileUploader.uploadFromPath(mockFilePath);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({ size: 0 }),
                    undefined
                );
            });

            it("should handle very large files", async () => {
                const largeStats = {
                    isDirectory: () => false,
                    size: 5 * 1024 * 1024 * 1024, // 5GB
                };
                const largeBuffer = Buffer.alloc(100); // Simulated partial content
                (fs.promises.stat as jest.Mock).mockResolvedValue(largeStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(largeBuffer);
                (mime.lookup as jest.Mock).mockReturnValue("video/mp4");

                await fileUploader.uploadFromPath(mockFilePath);

                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({ size: 5 * 1024 * 1024 * 1024 }),
                    undefined
                );
            });

            it("should handle special characters in file paths", async () => {
                const specialPath = "/path/to/file with spaces & special@chars!.jpg";
                (mime.lookup as jest.Mock).mockReturnValue("image/jpeg");

                await fileUploader.uploadFromPath(specialPath);

                expect(fs.promises.stat).toHaveBeenCalledWith(specialPath);
                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({
                        name: "file with spaces & special@chars!.jpg",
                    }),
                    undefined
                );
            });

            it("should handle symlinks", async () => {
                const symlinkStats = {
                    isDirectory: () => false,
                    isSymbolicLink: () => true,
                    size: 1024,
                };
                (fs.promises.stat as jest.Mock).mockResolvedValue(symlinkStats);
                (fs.promises.readFile as jest.Mock).mockResolvedValue(mockFileContent);
                (mime.lookup as jest.Mock).mockReturnValue("text/plain");

                await fileUploader.uploadFromPath(mockFilePath);

                // Should still work as long as it's not a directory
                expect(fileUploader.upload).toHaveBeenCalledWith(
                    expect.objectContaining({ size: 1024 }),
                    undefined
                );
            });
        });
    });
});