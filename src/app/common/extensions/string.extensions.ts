interface StringConstructor {
    Empty: string;
    WhiteSpace: string;
    isNullOrEmpty(val: string): boolean;
    isNullOrWhiteSpace(val: string): boolean;
    contains(base: string, val: string): boolean;
    cut(val: string, startIndex: number, endIndex: number): string;
    remove(base: string, val: string): string;
    replaceAll(base: string, val: string, replaceWith: string): string;
}

String.Empty = '';
String.WhiteSpace = ' ';

String.isNullOrEmpty = function (val: any): boolean {
    if (val === undefined || val === null || val.trim() === String.Empty) {
        return true;
    }
    return false;
};

String.isNullOrWhiteSpace = function (val: any): boolean {
    if (this.isNullOrEmpty(val) || val === String.WhiteSpace) {
        return true;
    }
    return false;
};

String.contains = function (base: string, val: string): boolean {
    if (this.isNullOrWhiteSpace(base) || this.isNullOrWhiteSpace(val)) {
        return false;
    }

    return base.indexOf(val) !== -1;
};

String.cut = function (val: string, startIndex: number, endIndex: number): string {
    if (this.isNullOrEmpty(val)) {
        return val;
    }

    if (endIndex < startIndex) {
        throw new RangeError('Start of the string to cut should be before the end');
    }

    const start = val.slice(0, startIndex);
    const end = val.slice(endIndex, val.length);

    return start.concat(end);
};

String.remove = function (base: string, val: string): string {
    return base.replace(val, String.Empty);
};

String.replaceAll = function (base: string, val: string, replaceWith: string): string {
    return base.replace(new RegExp(val, 'g'), replaceWith);
};
