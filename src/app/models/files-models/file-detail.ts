import { FileUploadStatus } from '../../enums';

export interface FileDetail {
  id: string;
  fileName: string;
  fileStatusId: FileUploadStatus;
  fileContent: string;
  processedDate: string;
  uploadedDate: string;
  rejectionReason: string;
  accountNumber: string;
}
