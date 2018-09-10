import { Directive, OnInit, OnDestroy, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { CanAccessService } from '../../services/auth/can-access.service';

@Directive({
  selector: '[canAccess]'
})
export class CanAccessDirective implements OnInit, OnDestroy {
  @Input('canAccess') public canAccess: string | string[];
  private permission$: Subscription;

  constructor(private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _canAccessService: CanAccessService) {
  }

  public ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ =
      this._canAccessService
        .checkAuthorization(this.canAccess)
        .subscribe(authorized => {
          if (authorized) {
            this._viewContainer.createEmbeddedView(this._templateRef);
          } else {
            this._viewContainer.clear();
          }
        });
  }

  public ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
