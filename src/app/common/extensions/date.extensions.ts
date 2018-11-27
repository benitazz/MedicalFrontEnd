import * as moment from 'moment';
import { Constants } from '../constants/constant';

export { }

// DECLARATION
declare global {
    interface Date {
        getIsAm(): boolean;
        setIsAm(value: boolean): void;

        setTimeFromDate(time: Date): Date;
        setStartTime(): Date;
        setEndTime(): Date;

        getDateString(): string;
        daysDifference(date1: Date, datat2: Date): number;
        getTimeString(): string;

        isValid(): boolean;
        nowString(): string;
        format(format?: string): string;

        isAm: boolean;
        date: Date;
        formats: any;
    }

    interface DateConstructor {
        getDate(addDays?: number, fromDate?: Date): Date;
        parseDate(date: string): Date;
        getDateString(date: string): string;
        daysDifference(date1: Date, datat2: Date): number;
        getTimeString(date: string): string;
        format(date: string, format?: string): string;

        getTomorrow(): Date;
        getYesterday(): Date;
        getLastMonth(): Date;
    }
}

// GET
Date.prototype.formats = [
    moment.ISO_8601,
    'MM/DD/YYYY:HH*mm*ss',
];

Date.getDate = function (addDays?: number, fromDate?: Date): Date {
    const date = fromDate ? fromDate : new Date();

    if (addDays && addDays !== 0) {
        date.setDate(date.getDate() + addDays);
    }

    return date;
};

Date.parseDate = function (date: string): Date {
    if (!date) {
        return null;
    }
    const d = new Date(date);
    if (!d.isValid) {
        return;
    }

    return d;
};

Date.getYesterday = function (): Date {
    const date = Date.getDate(-Constants.DEFAULT_SINGLE_DAY);
    date.setStartTime();
    return date;
}

Date.getTomorrow = function (): Date {
    const date = Date.getDate(Constants.DEFAULT_SINGLE_DAY);
    date.setStartTime();
    return date;
}

Date.getLastMonth = function (): Date {
    const date = Date.getDate(-Constants.DEFAULT_30_DAYS);
    date.setStartTime();
    return date;
}

// VALIDATE
Date.prototype.isValid = function (): boolean {
    if (moment(this, this.formats, true).isValid()) {
        console.log(`Invalid Date Format: ${this}`);
        return true;
    } else {
        console.log(`Invalid Date Format: ${this}`);
        return false;
    }
};

// AM vs PM
Date.prototype.getIsAm = function (): boolean {
    return this.isAm;
};

Date.prototype.setIsAm = function (value: boolean): void {
    this.isAm = value;
};

// TIME
Date.prototype.setTimeFromDate = function (time: Date): Date {
    if (!this.isValid) {
        return;
    }

    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();

    this.setHours(h, m, s, 0);
    console.log(`Time set to : ${this.toISOString()}`);
    return this;
};

Date.prototype.setStartTime = function (): Date {
    this.setHours(0, 0, 0, 0);
    return this;
};

Date.prototype.setEndTime = function (): Date {
    this.setHours(23, 59, 59, 999);
    return this;
};

Date.prototype.getTimeString = function (): string {
    if (!moment(this, this.formats, true).isValid()) {
        console.log(`Invalid Date Format: ${this}`);
        return;
    }

    return moment(this).format(Constants.TIME_FORMAT);
};

Date.getTimeString = function (date: string): string {
    return new Date(date).getTimeString();
};

// DATE
Date.prototype.getDateString = function (): string {
    if (!moment(this, this.formats, true).isValid()) {
        console.log(`Invalid Date Format: ${this}`);
        return;
    }
    return moment(this).format(Constants.DATE_FORMAT);
};

Date.getDateString = function (date: string): string {
    return new Date(date).getDateString();
};

Date.prototype.nowString = function (): string {
    return this.toISOString();
};

// DAYS
Date.daysDifference = function (date1: Date, date2: Date): number {
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    const minutesPerSecond = 1000 * 60 * 60 * 24;
    return Math.abs(Math.floor((utc2 - utc1) / minutesPerSecond));
};

// FORMAT
Date.prototype.format = function (format?: string): string {
    if (!moment(this, this.formats, true).isValid()) {
        console.log(`Invalid Date Format: ${this}`);
        return;
    }

    switch (format) {
        case 'ellapsedDays':
            return moment(this).fromNow();
        case 'fullDate':
        case Constants.FORMAT_FULL_DATE:
            return moment(this).format(Constants.FORMAT_FULL_DATE);
        case 'fullDateTime':
        case Constants.FORMAT_FULL_DATE_TIME:
            return moment(this).format(Constants.FORMAT_FULL_DATE_TIME);
        case 'time':
        case Constants.FORMAT_TIME:
            return moment(this).format(Constants.FORMAT_TIME);
        case 'iso':
        case Constants.FORMAT_ISO:
            return this.toISOString();
        default:
            return moment(this).format(Constants.FORMAT_DATE.toUpperCase());
    }
};

Date.format = function (date: string, format?: string): string {
    if (!moment(date, this.formats, true).isValid()) {
        console.log(`Invalid Date Format: ${this}`);
        return;
    }

    return new Date(date).format(format);
};

// TIME ZONES