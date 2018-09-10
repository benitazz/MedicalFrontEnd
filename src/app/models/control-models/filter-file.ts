import { Lookup } from './../shared/lookup';

export interface FileFilter {
   dateFilter: any;
   statusFilter: Lookup;
   searchFilter: string;
}
