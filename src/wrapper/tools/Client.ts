import { Tools } from '../../api/resources/tools/client/Client.js';
import { FileUploader } from './FileUploader.js';

export class EnhancedTools extends Tools {
    protected _fileUploader: FileUploader | undefined;

    public get file(): FileUploader {
        return (this._fileUploader ??= new FileUploader(this._options));
    }
}