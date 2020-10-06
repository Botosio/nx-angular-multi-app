import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNavModule } from '@demo/shared/nav';
import { NxLibLib3Module } from '@demo/nx-lib/lib3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedNavModule, NxLibLib3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
