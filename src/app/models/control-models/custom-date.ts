
export class CustomDate {
    public day: number;
    public month: number;
    public year: number;

    constructor(arg: Date | CustomDate) {
        if (arg instanceof Date) {
            this.day = arg.getDate();
            this.month = arg.getMonth() + 1; // the default month is 0;
            this.year = arg.getFullYear();
        } else {
            this.day = arg.day;
            this.month = arg.month;
            this.year = arg.year;
        }
    }

    public getDate(): Date {
        const retVal = new Date(this.year, this.month - 1, this.day); // Month is 0 indexed
        return retVal;
    }
}
