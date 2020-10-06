import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNavModule } from '@demo/shared/nav';
import { AngularLibLib1Module } from '@demo/angular-lib/lib1';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedNavModule,
    AngularLibLib1Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
