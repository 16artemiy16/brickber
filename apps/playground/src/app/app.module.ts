import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConstructorFeatureShellModule } from '@brickber/constructor/feature-shell';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConstructorFeatureShellModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
