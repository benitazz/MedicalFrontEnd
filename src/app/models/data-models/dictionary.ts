import { IKeyValuePair } from './keyValuePair';

export interface IDictionary<T> {
    [property: string]: T;
}

export class Dictionary<T> implements IDictionary<T> {
    [property: string]: T;

    constructor(data?: IKeyValuePair<T>[]) {
        if (data) {
            data.forEach(d => {
                this[d.key] = d.value;
            });
        }
    }
}
