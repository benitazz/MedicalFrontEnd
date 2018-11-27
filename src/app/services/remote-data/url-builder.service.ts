import { IDictionary, UrlBuilderCriteria, UrlExpandCriteria } from '../../models';
import { Api, Constants, Odata } from '../../common';
import { environment } from '../../../environments/environment';
import '../../common/extensions/string.extensions';

export class UrlBuilderService {

  constructor() { }

  // BUILD
  public buildUrl(url: string = String.Empty, metaData: string = String.Empty): string {
    let result = // String.contains(url, environment.webservice_api_url) ?
      url.search(environment.webservice_api_url) !== -1 ?
        url : `${environment.webservice_api_url}/${environment.webservice_api_version}${url}`;

    if (metaData) {
      result += metaData;
    }
    return result;
  }

  public build(criteria: UrlBuilderCriteria): string {
    let query = String.Empty;
    for (const key of Object.keys(criteria)) {
      if (key !== 'resource' && criteria[key]) {
        query = query.concat(query ? `${criteria[key]}` : `&${criteria[key]}`);
      }
    }

    if (query) {
      query = query.trim();
    }
    return this.buildQueryUrl(criteria.resource, query);
  }

  public buildExpand(criteria: UrlExpandCriteria): string {
    let query = String.Empty;
    for (const key of Object.keys(criteria)) {
      if (key !== 'property' && criteria[key]) {
        query = query.concat(query === String.Empty ? `${criteria[key]}` : `;${criteria[key]}`);
      }
    }

    if (query) {
      query = query.trim();
    }
    return this.expandQuery(criteria.property, query);
  }

  public buildQueryUrl(url: string, queryString: string): string {
    return queryString ? this.buildUrl(url, `?${queryString}`) : this.buildUrl(url);
  }

  public buildInUrl(url: string, identifier: string, list: any[]): string {
    return this.buildUrl(`${url}?${this.filterIn(identifier, list)}`);
  }

  public buildNotInUrl(url: string, identifier: string, list: any[]): string {
    return this.buildUrl(`${url}?${this.filterNotIn(identifier, list)}`);
  }

  // URL HELPERS
  public query(property: string, value: any): string {
    return `${property}?${value}`;
  }

  public resource(api: string, identifier: any): string {
    identifier = this.checkAddQuotes(identifier);
    return `${api}(${identifier})`;
  }

  public function(apiFunction: string, parameters: string[]): string {
    const properties = parameters.join(Constants.DEFAULT_SEPARATOR);
    return `${apiFunction}(${properties})`;
  }

  public select(property: string): string {
    return `$${Odata.SELECT}=${property}`;
  }

  public selectMany(list: string[]): string {
    const properties = list.join(Constants.DEFAULT_SEPARATOR);
    return `$${Odata.SELECT}=${properties}`;
  }

  public skip(number: number): string {
    if (number) {
      return `$${Odata.SKIP}=${number}`;
    } else {
      return `$${Odata.SKIP}=${environment.lazy_load_capacity}`;
    }
  }

  public top(number?: number): string {
    if (number) {
      return `$${Odata.TOP}=${number}`;
    } else {
      return `$${Odata.TOP}=${environment.lazy_load_capacity}`;
    }
  }

  public patchProperty(url: string, property: string): string {
    return `${url}/${property}`;
  }

  // FILTER
  public filter(condition: any): string {
    return `$${Odata.FILTER}=${condition}`;
  }

  public filterEquals(property: string, value: any): string {
    return `${this.filter(this.equals(property, value))}`;
  }

  public filterNotEqual(property: string, value: any): string {
    return `${this.filter(this.notEqual(property, value))}`;
  }

  public filterContains(property: string, value: any): string {
    return `${this.filter(this.contains(property, value))}`;
  }

  public filterContainsOr(list: IDictionary<string>): string {
    const keys = Object.keys(list);

    const conditions = keys.map(key => this.contains(key, list[key]));
    const query = this.orMany(conditions);

    return this.filter(query);
  }

  public filterIn(identifier: string, list: any[]): string {
    const condition = this.In(identifier, list);
    return `${this.filter(condition)}`;
  }

  public filterNotIn(identifier: string, list: any[]): string {
    const condition = this.NotIn(identifier, list);
    return `${this.filter(condition)}`;
  }

  // ORDER
  public orderby(property: string): string {
    return `$${Odata.ORDER_BY}=${property}`;
  }

  public orderbyDescending(property: string): string {
    return `$${Odata.ORDER_BY}=${property} ${Odata.DESC}`;
  }

  // EXPAND
  public expand(property: string): string {
    return `$${Odata.EXPAND}=${property}`;
  }

  public expandMany(list: string[]): string {
    const properties = list.join(Constants.DEFAULT_SEPARATOR);
    return this.expand(properties);
  }

  public expandFilter(property: string, condition: string, top?: number, skip?: number): string {
    const filter = this.filter(condition);
    return this.expandQuery(property, filter);
  }

  public expandQuery(property: string, query: string): string {
    return `${this.expand(property)}(${query})`;
  }

  public expandCount(property: string, encode?: boolean): string {
    const count = encode ? Api.ENCODED_FORMAT_COUNT : Api.FORMAT_COUNT;
    return `${this.expand(property)}(${count})`;
  }

  // CONDITION
  public condition(property: string, value: any): string {
    return `${property}=${value}`;
  }

  public In(identifier: string, list: any[]): string {
    let filter: string = String.Empty;

    for (let index = 0; index < list.length; index++) {
      const id = list[index];
      filter += `${identifier} ${Odata.EQUAL} ${id}`;

      if (index < list.length - 1) {
        filter += ` ${Odata.OR} `;
      }
    }

    return filter ? `(${filter})` : String.Empty;
  }

  public NotIn(identifier: string, list: any[]): string {
    let filter: string = String.Empty;

    for (let index = 0; index < list.length; index++) {
      const id = list[index];
      filter += `${identifier} ${Odata.NOT_EQUAL} ${id}`;

      if (index < list.length - 1) {
        filter += ` ${Odata.AND} `;
      }
    }

    return filter ? `(${filter})` : String.Empty;
  }

  public any(property: string, condition: string): string {
    return `${property}/${Odata.ANY}(o: o/${condition})`;
  }

  public all(property: string, condition: string): string {
    return `${property}/${Odata.ALL}(o: o/${condition})`;
  }

  public contains(property: string, value: any): string {
    return `${Odata.CONTAINS}(${property},'${value}')`;
  }

  public equals(property: string, value: any, addQuotes: boolean = true): string {
    if (addQuotes) {
      value = this.checkAddQuotes(value);
    }

    return `${property} ${Odata.EQUAL} ${value}`;
  }

  public greaterOrEquals(property: string, value: any): string {
    const results = this.removeQuotes(value);
    return `${property} ${Odata.GREATER_THAN} ${results}`;
  }

  public lessThanOrEquals(property: string, value: any): string {
    const results = this.removeQuotes(value);
    return `${property} ${Odata.LESS_THAN} ${results}`;
  }

  public betweenOrEquals(fromProperty: string, fromValue: any, toProperty: string, toValue: any): string {
    const fromCondition = this.greaterOrEquals(fromProperty, fromValue);
    const toCondition = this.lessThanOrEquals(toProperty, toValue);

    return this.and(fromCondition, toCondition);
  }

  public notEqual(property: string, value: any): string {
    value = this.checkAddQuotes(value);
    return `${property} ${Odata.NOT_EQUAL} ${value}`;
  }

  public noResultFilter(property: string): string {
    return this.filterEquals(property, -1);
  }

  // OPERATORS
  public and(first: string, second: string): string {
    if (!first) {
      return second;
    } else if (!second) {
      return first;
    } else {
      return this.combine(first, second, Odata.AND);
    }
  }

  public or(first: string, second: string): string {
    if (!first) {
      return second;
    } else if (!second) {
      return first;
    } else {
      return this.combine(first, second, Odata.OR);
    }
  }

  public orMany(conditions: string[]): string {
    return this.combineMany(conditions, Odata.OR);
  }

  public andMany(conditions: string[]): string {
    return this.combineMany(conditions, Odata.AND);
  }

  public combine(first: string, second: string, operator: string): string {
    return `${first} ${operator} ${second}`;
  }

  public combineMany(conditions: string[], operator: string): string {
    if (conditions.length === 1) {
      return conditions[0];
    }
    return conditions.join(` ${operator} `);
  }

  // CRITERIA
  public getCriteria(url: string): UrlBuilderCriteria {
    const criteria = {} as UrlBuilderCriteria;
    const segments = url.split('$');

    segments.forEach(s => {
      if (s.startsWith(Odata.FILTER)) {
        criteria.filter = `$${s}`;
      } else
        if (s.startsWith(Odata.EXPAND)) {
          criteria.expand = `$${s}`;
        } else
          if (s.startsWith(Odata.ORDER_BY)) {
            criteria.order = `$${s}`;
          } else
            if (s.startsWith(Odata.TOP)) {
              criteria.top = `$${s}`;
            } else
              if (s.startsWith(Odata.SKIP)) {
                criteria.skip = `$${s}`;
              } else {
                criteria.resource = String.remove(s, '?');
              }
    });

    return criteria;
  }

  public addFilter(url: string, filter: string, operator?: string): string {
    const criteria = this.getCriteria(url);
    this.addFilterCriteria(criteria, filter);

    return this.build(criteria);
  }

  public addFilterCriteria(criteria: UrlBuilderCriteria, filter: string, operator?: string): UrlBuilderCriteria {
    if (!operator) {
      operator = Odata.AND;
    }

    if (criteria.filter) {
      criteria.filter = this.combine(criteria.filter, filter, operator);
    } else {
      criteria.filter = this.hasUrlFilter(filter) ? filter : this.filter(filter);
    }

    return criteria;
  }

  // COMMON URL
  public getSkipUrl(url: string, currentLength: number): string {
    const firstTop = `${Odata.FIRST_QUERY_PARAMATER}${Odata.TOP}=`;
    const nextTop = `${Odata.NEXT_QUERY_PARAMATER}${Odata.TOP}=`;

    if (String.contains(url, Odata.TOP)) {
      const topStart = String.contains(url, firstTop) ? url.indexOf(firstTop) : url.indexOf(nextTop);

      if (topStart > 0) {
        const restUrl = url.indexOf(Odata.NEXT_QUERY_PARAMATER, topStart + 2);
        url = String.cut(url, topStart, restUrl > 0 ? restUrl : url.length);
      }
    }

    const param = this.getUrlParameter(url);
    return `${url}${param}${Odata.SKIP}=${currentLength}
    ${Odata.NEXT_QUERY_PARAMATER}${Odata.TOP}=${environment.lazy_load_capacity}`;
  }

  public format(url: string): string {
    return `${url}&${Api.FORMAT_JSON}`;
  }


  // METHODS
  public getUrlParameter(url: string): string {
    return String.contains(url, Odata.FIRST_QUERY_PARAMATER) ? Odata.NEXT_QUERY_PARAMATER : Odata.FIRST_QUERY_PARAMATER;
  }

  public hasUrlFilter(url: string): boolean {
    return String.contains(url, `${Odata.FILTER}=`);
  }

  private checkAddQuotes(value: any): any {
    let result = true;

    const valueType = typeof value;
    switch (valueType) {
      case 'number':
      case 'boolean':
        result = false;
        break;
      default:
        result = true;
        break;
    }

    if (result) {
      return `'${value}'`;
    }

    return value;
  }

  private removeQuotes(value: string): any {
    return value.replace(/'/g, String.Empty);
  }
}


