import { PinnacleClient as FernClient } from "../Client";
import * as path from "path";
import * as fs from "fs";
import * as mime from "mime-types";
import fetch from "node-fetch";

export class PinnacleClient extends FernClient {
    /**
     * Upload a file to the server and return the download URL.
     *
     * @param {string} filePath - The path to the file to be uploaded.
     * @returns {Promise<string>} - The URL to download the uploaded file.
     *
     * @throws {Error} - If the file type cannot be determined or if the upload fails.
     *
     * @example
     *     const downloadUrl = await client.upload("/path/to/file");
     *     console.log("File available at:", downloadUrl);
     */
    public async upload(filePath: string): Promise<string> {
        const fileStats = fs.statSync(filePath);
        const fileType = mime.lookup(filePath);

        if (!fileType) {
            throw new Error("Could not determine the file type");
        }

        const localFile = {
            name: path.basename(filePath),
            contentType: fileType,
            size: fileStats.size,
        };

        const { upload: uploadUrl, download: downloadUrl } = await this.tools.uploadUrl({
            name: localFile.name,
            contentType: localFile.contentType,
            size: localFile.size,
        });

        if (!uploadUrl) {
            throw new Error("Failed to get upload url");
        }

        if (!downloadUrl) {
            throw new Error("Failed to get download url");
        }

        const uploadFile = async (filePath: string, uploadUrl: string) => {
            const fileStream = fs.createReadStream(filePath);
            const uploadResult = await fetch(uploadUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": fileType,
                },
                body: fileStream,
            });

            if (!uploadResult.ok) {
                throw new Error(`Failed to upload file: ${uploadResult.statusText}`);
            }
        };

        await uploadFile(filePath, uploadUrl);

        return downloadUrl;
    }
}
