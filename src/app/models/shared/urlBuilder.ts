
export class UrlBuilderCriteria {
    public resource;
    public expand;
    public filter;
    public select;
    public order;
    public skip;
    public top;

    constructor(resource: string) {
        this.resource = resource;
    }
}

export class UrlExpandCriteria {
    public property;
    public filter;
    public select;
    public orderby;
    public skip;
    public top;

    constructor(property: string) {
        this.property = property;
    }
}
