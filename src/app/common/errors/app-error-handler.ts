import { ErrorHandler, Injectable, Injector, Inject, NgZone } from '@angular/core';
import { BannerService } from '../../services/common/banner.service';
import { IsBusyService } from '../is-busy/is-busy.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(@Inject(Injector) private injector: Injector) {
        super();
    }

    private get bannerService(): BannerService {
        return this.injector.get(BannerService);
    }

    private get isBusyService(): IsBusyService {
        return this.injector.get(IsBusyService);
    }

    public handleError(error: any): void {
        const zone: NgZone = this.injector.get(NgZone);
        zone.run(() => {
            this.bannerService.showError('An unresolved error has occurred, please contact your administrator.');
            this.isBusyService.hide();
            super.handleError(error);
        });
    }
}
