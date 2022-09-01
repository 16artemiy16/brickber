import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShapeModule } from '@brickber/shape';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShapeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
