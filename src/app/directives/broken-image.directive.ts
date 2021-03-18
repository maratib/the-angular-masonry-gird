import { Input, Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'img',
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src',
  },
})
export class BrokenImageDirective {
  @Input() src: string;
  @Input() default: string;
  @HostBinding('class') className;

  updateUrl() {
    if (!this.default) {
      this.src = 'assets/images/no-image.jpg';
    } else {
      this.src = this.default;
    }
  }

  load() {
    this.className = 'image-loaded';
  }
}
