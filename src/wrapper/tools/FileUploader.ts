import * as mime from "mime-types";
import { File_ } from "../../api/resources/tools/resources/file/client/Client.js";
import { UploadFileParams } from "../../api/resources/tools/resources/file/client/requests/index.js";
import * as Pinnacle from "../../api/index.js";
import { BadRequestError, NotFoundError, InternalServerError } from "../../api/errors/index.js";

export class FileUploader extends File_ {
    /**
     * Upload a file from a file path (Node.js) or File object (browser)
     * @param fileInput - File path string (Node.js) or File object (browser)
     * @param options - Upload options
     * @returns The download URL of the uploaded file
     */
    public async uploadFromPath(
        fileInput: string | File,
        options?: {
            name?: string;
            options?: UploadFileParams.Options;
        },
    ): Promise<string> {
        let size: number;
        let fileName: string;
        let contentType: string;
        let blob: Blob;

        if (typeof window === "undefined") {
            if (typeof fileInput !== "string") {
                throw new BadRequestError({ message: "In Node.js, fileInput must be a file path string" });
            }

            const fs = await import("fs");
            const path = await import("path");

            const filePath = fileInput;

            let stats: import("fs").Stats;
            try {
                stats = await fs.promises.stat(filePath);
            } catch (error: unknown) {
                if ((error as NodeJS.ErrnoException).code === "ENOENT") {
                    throw new NotFoundError({ error: `File not found: ${filePath}` });
                }
                throw new InternalServerError({ error: `Failed to access file: ${(error as Error).message}` });
            }

            if (stats.isDirectory()) {
                throw new BadRequestError({ message: `Path is a directory, not a file: ${filePath}` });
            }

            size = stats.size;
            fileName = options?.name || path.default.basename(filePath);
            contentType = this.getMimeType(filePath);

            const fileBuffer = await fs.promises.readFile(filePath);
            const arrayBuffer = new Uint8Array(fileBuffer).buffer;
            blob = new Blob([arrayBuffer], { type: contentType });
        } else {
            if (!(fileInput instanceof File)) {
                throw new BadRequestError({ message: "In browser, fileInput must be a File object" });
            }

            const file = fileInput;
            size = file.size;
            fileName = options?.name || file.name;
            contentType = file.type || this.getMimeType(file.name);
            blob = file;
        }

        const uploadParams: UploadFileParams = {
            contentType,
            size,
            name: fileName,
            options: options?.options,
        };

        const uploadResult = await this.upload(uploadParams);

        if (uploadResult.uploadUrl) {
            await fetch(uploadResult.uploadUrl, {
                method: "PUT",
                body: blob,
                headers: {
                    "Content-Type": contentType,
                },
            });
        }

        return uploadResult.downloadUrl;
    }

    private getMimeType(filePath: string): string {
        const mimeType = mime.lookup(filePath);

        if (!mimeType) {
            return "application/octet-stream";
        }

        const supportedTypes = new Set([
            "audio/mpeg",
            "audio/mp4",
            "audio/ogg",
            "audio/aac",
            "audio/webm",
            "audio/wav",
            "audio/3gpp",
            "audio/amr",
            "video/mp4",
            "video/mpeg",
            "video/quicktime",
            "video/webm",
            "video/3gpp",
            "video/H264",
            "video/x-m4v",
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/bmp",
            "image/tiff",
            "image/webp",
            "application/pdf",
            "text/csv",
            "application/rtf",
            "text/vcard",
            "text/calendar",
        ]);

        if (supportedTypes.has(mimeType)) {
            return mimeType;
        }

        const baseType = mimeType.split("/")[0];
        if (["audio", "video", "image"].includes(baseType)) {
            console.warn(`MIME type ${mimeType} may not be fully supported. Proceeding anyway.`);
            return mimeType;
        }

        return "application/octet-stream";
    }
}
