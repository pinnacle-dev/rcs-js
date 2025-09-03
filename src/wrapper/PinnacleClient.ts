import { PinnacleClient as FernClient } from "../Client";

export class PinnacleClient extends FernClient {
    /**
     * Upload a file to the server and return the download URL.
     *
     * @param {File} file - The file to be uploaded.
     * @returns {Promise<string>} - The URL to download the uploaded file.
     *
     * @throws {Error} - If the file type cannot be determined or if the upload fails.
     *
     * @example
     *     const file = new File(["content"], "example.txt", { type: "text/plain" });
     *     const downloadUrl = await client.upload(file);
     *     console.log("File available at:", downloadUrl);
     */
    public async upload(file: File): Promise<string> {
        const fileType = file.type;

        if (!fileType) {
            throw new Error("Could not determine the file type");
        }

        const { upload: uploadUrl, download: downloadUrl } = await this.tools.uploadUrl({
            name: file.name,
            contentType: fileType,
            size: file.size,
        });

        if (!uploadUrl) {
            throw new Error("Failed to get upload url");
        }

        if (!downloadUrl) {
            throw new Error("Failed to get download url");
        }

        const uploadFile = async (file: File, uploadUrl: string) => {
            const fileBuffer = await file.arrayBuffer();
            const uploadResult = await fetch(uploadUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": file.type,
                    "Content-Length": file.size.toString(),
                },
                body: Buffer.from(fileBuffer),
            });

            if (!uploadResult.ok) {
                throw new Error(`Failed to upload file: ${uploadResult.statusText}`);
            }
        };

        await uploadFile(file, uploadUrl);

        return downloadUrl;
    }
}
