import { Directive, ElementRef, HostBinding, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[collapse]'
})
export class CollapseDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  // shown
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded')
  public isExpanded = true;

  @Input()
  public set collapse(value: boolean) {
    this.isExpanded = value;
    this.toggle();
  }

  public get collapse(): boolean {
    return this.isExpanded;
  }

  private toggle(): void {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  private hide(): void {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'none');
  }

  private show(): void {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'block');
  }
}
