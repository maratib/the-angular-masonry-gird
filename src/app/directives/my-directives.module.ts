import { BrokenImageDirective } from './broken-image.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './lazy-img.directive';

@NgModule({
  declarations: [BrokenImageDirective, LazyImgDirective],
  imports: [CommonModule],
  exports: [BrokenImageDirective, LazyImgDirective],
})
export class MyDirectivesModule {}
