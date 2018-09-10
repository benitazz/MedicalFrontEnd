import { LoaderType } from '../../enums';

export abstract class ComponentBase {

    public isLoading: boolean;
    public isLoadingMore: boolean;
    public loaderType = LoaderType;

    constructor() {

    }
}
