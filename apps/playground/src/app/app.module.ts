import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConstuctorFeatureShellModule } from '@brickber/constuctor/feature-shell';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConstuctorFeatureShellModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
