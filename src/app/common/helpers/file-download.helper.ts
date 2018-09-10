import { Response } from '@angular/http';
import { FileDetail } from '../../models';
import { Constants } from '..';
import { saveAs as importedSaveAs } from 'file-saver';

/**
 * Saves a file by opening file-save-as dialog in the browser
 * using file-save library.
 * @param blobContent file content as a Blob
 * @param fileName name file should be saved as
 */
export const saveFile = (fileContent: string, fileName?: string) => {
    const csvData = new Blob([atob(fileContent)], { type: Constants.CSV_FILE_FORMAT });
    importedSaveAs(csvData, fileName);
};

/**
 * Derives file name from the http response
 * by looking inside content-disposition
 * @param res http Response
 */
export const getFileNameFromResponseContentDisposition = (res: Response) => {
    const contentDisposition = res.headers.get('content-disposition') || '';
    const matches = /filename=([^;]+)/ig.exec(contentDisposition);
    const fileName = (matches[1] || 'untitled').trim();
    return fileName;
};

