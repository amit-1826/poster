import {  AfterViewInit, Directive, ElementRef, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocus implements OnInit {
  appAutoFocus = input<boolean>(true);

  private elementRef = inject(ElementRef<HTMLElement>);

  constructor() { }

  ngOnInit(): void {
    if (this.appAutoFocus()) {
      this.elementRef.nativeElement.focus();
    }
  }

}
