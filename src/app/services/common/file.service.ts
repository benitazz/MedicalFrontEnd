import { nameof } from 'ts-simple-nameof';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from '../remote-data/data.service';
import { Observable } from 'rxjs';
import { FileDetail, FileContent, FileFilter, Lookup, CustomDate } from '../../models';
import { Api } from '../../common';

@Injectable({
    providedIn: 'root'
})
export class FileService extends DataService {
    constructor(http: Http) {
        super(http, Api.FILE_UPLOAD);
    }

    public getFiles(fileFilter?: FileFilter): Observable<Array<FileDetail>> {
        let url = '';
        if (!fileFilter ||
            ((!fileFilter.statusFilter || fileFilter.statusFilter.id === -1)
                && !fileFilter.searchFilter
                && !fileFilter.dateFilter)) {
            url = this.buildUrl(Api.FILE_UPLOAD);
            return super.getAll(url);
        }

        let query = '';

        for (const property in fileFilter) {
            if (fileFilter.hasOwnProperty(property)) {
                const propertyValue = fileFilter[property];
                switch (property) {
                    case nameof<FileFilter>(f => f.searchFilter):
                        const containsQuery = this.contains('FileName', propertyValue);
                        query = !query ? containsQuery : this.and(query, containsQuery);
                        break;

                    case nameof<FileFilter>(f => f.dateFilter):
                        if (propertyValue) {
                            const uploadedDateProperty = 'UploadedDate';
                            const startDate = this.getFormattedDate(propertyValue.beginDate);
                            const endDate = this.getFormattedDate(propertyValue.endDate);
                            const dateQuery = this.betweenOrEquals(uploadedDateProperty, startDate, uploadedDateProperty, endDate);
                            query = !query ? dateQuery : this.and(query, dateQuery);
                        }

                        break;

                    case nameof<FileFilter>(f => f.statusFilter):
                        const lookup: Lookup = propertyValue;
                        if (lookup.id !== -1) {
                            query = this.getQuery(query, 'FileStatusId', lookup.id);
                        }
                        break;
                }
            }
        }

        const filter = this.filter(query);
        url = this.buildUrl(`${Api.FILE_UPLOAD}?${filter}`);
        return super.getAll(url);
    }

    public getFileDetailsById(fileId: string): Observable<Array<FileDetail>> {
        const equal = this.equals('Id', fileId, false);
        const filter = this.filter(equal);

        const url = this.buildUrl(`${Api.FILE_UPLOAD}?${filter}`);
        return super.getAll(url);
    }

    public getFileContentById(fileId: string): Observable<FileContent> {
        const url = this.buildUrl(`${Api.FILE_UPLOAD}/${fileId}${Api.FUNCTIONS_FILE_CONTENT}`);
        return super.get(url);
    }

    private getQuery(query: string, propertyName: string, propertyValue: any, addQoutes = false): string {
        const value = this.equals(propertyName, propertyValue, addQoutes);
        return !query ? value : this.and(query, value);
    }

    private getFormattedDate(customDate: CustomDate): string {
        const date = new Date(customDate.year, customDate.month - 1, customDate.day);
        return date.toISOString();

    }
}
