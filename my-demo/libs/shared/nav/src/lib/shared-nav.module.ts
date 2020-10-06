import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalNavComponent } from './global-nav/global-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GlobalNavComponent],
  exports: [GlobalNavComponent],
})
export class SharedNavModule {}
