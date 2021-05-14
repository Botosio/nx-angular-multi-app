import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedModuleRoutingModule } from './lazy-loaded-module-routing.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';


@NgModule({
  declarations: [
    LazyComponentComponent
  ],
  imports: [
    CommonModule,
    LazyLoadedModuleRoutingModule
  ]
})
export class LazyLoadedModuleModule { }
