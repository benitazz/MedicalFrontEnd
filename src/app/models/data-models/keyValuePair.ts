/** The key value pair model */
export interface IKeyValuePair<T> {
    key: string;
    value: T;
}

export class KeyValuePair<T> implements IKeyValuePair<T> {
    public key: string;
    public value: T;

    constructor(property: string, propetyValue: T) {
        this.key = property;
        this.value = propetyValue;
    }
}
