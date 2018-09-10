import { FileUploadStatus } from '../../enums';

export interface FileUpload {
    filename: string;
    fileContent: string;
    fileStatus: FileUploadStatus;
}
