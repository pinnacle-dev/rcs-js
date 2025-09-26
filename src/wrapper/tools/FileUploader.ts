import * as fs from 'fs';
import * as path from 'path';
import * as mime from 'mime-types';
import { File_ } from '../../api/resources/tools/resources/file/client/Client.js';
import { UploadFileParams } from '../../api/resources/tools/resources/file/client/requests/index.js';
import * as Pinnacle from '../../api/index.js';
import { BadRequestError, NotFoundError, InternalServerError } from '../../api/errors/index.js';

export class FileUploader extends File_ {
    public async uploadFromPath(
        filePath: string,
        options?: {
            name?: string;
            options?: UploadFileParams.Options;
        }
    ): Promise<Pinnacle.UploadResults> {
        // validate file exists and get metadata
        let stats: fs.Stats;
        try {
            stats = await fs.promises.stat(filePath);
        } catch (error: any) {
            // file or directory doesn't exist
            if (error.code === 'ENOENT') {
                throw new NotFoundError({ error: `File not found: ${filePath}` });
            }
            // handle other filesystem errors (permissions, disk errors, etc.)
            throw new InternalServerError({ error: `Failed to access file: ${error.message}` });
        }

        if (stats.isDirectory()) {
            throw new BadRequestError({ message: `Path is a directory, not a file: ${filePath}` });
        }

        const size = stats.size;

        const fileName = options?.name || path.basename(filePath);

        const contentType = this.getMimeType(filePath);

        const uploadParams: UploadFileParams = {
            contentType,
            size,
            name: fileName,
            options: options?.options
        };

        const uploadResult = await this.upload(uploadParams);

        if (uploadResult.uploadUrl) {
            const fileBuffer = await fs.promises.readFile(filePath);
            const arrayBuffer = new Uint8Array(fileBuffer).buffer;
            const blob = new Blob([arrayBuffer], { type: contentType });

            await fetch(uploadResult.uploadUrl, {
                method: 'PUT',
                body: blob,
                headers: {
                    'Content-Type': contentType
                }
            });
        }

        return uploadResult;
    }

    private getMimeType(filePath: string): string {
        const mimeType = mime.lookup(filePath);

        if (!mimeType) {
            return 'application/octet-stream';
        }

        const supportedTypes = new Set([
            'audio/mpeg',
            'audio/mp4',
            'audio/ogg',
            'audio/aac',
            'audio/webm',
            'audio/wav',
            'audio/3gpp',
            'audio/amr',
            'video/mp4',
            'video/mpeg',
            'video/quicktime',
            'video/webm',
            'video/3gpp',
            'video/H264',
            'video/x-m4v',
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/bmp',
            'image/tiff',
            'image/webp',
            'application/pdf',
            'text/csv',
            'application/rtf',
            'text/vcard',
            'text/calendar'
        ]);

        if (supportedTypes.has(mimeType)) {
            return mimeType;
        }

        const baseType = mimeType.split('/')[0];
        if (['audio', 'video', 'image'].includes(baseType)) {
            console.warn(`MIME type ${mimeType} may not be fully supported. Proceeding anyway.`);
            return mimeType;
        }

        return 'application/octet-stream';
    }
}