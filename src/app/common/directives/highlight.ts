import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '[style.backgroundColor]': 'bgColor'
  }
})
export class Highlight {
  defaultColor = input<string>('#f9f9f9');

  bgColor = this.defaultColor();

  constructor() { }

  onMouseEnter() {
    this.bgColor = '#cecaca';
  }

  onMouseLeave() {
    this.bgColor = this.defaultColor();
  }

}