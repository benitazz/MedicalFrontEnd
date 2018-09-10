export interface FileTransaction {
    fileTransactionId: string;
    fileId: string;
    fileTransactionStatusId: number;
    name: string;
    surname: string;
    cellNumber: string;
    amount: number;
    rejectionReason: string;
    fileTransactionTypeId: number;
    paidDate: string;
    processedDate: string;
}
