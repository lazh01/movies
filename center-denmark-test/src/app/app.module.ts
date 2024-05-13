import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CreationPageComponent } from './creation-page/creation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewPageComponent,
    DetailPageComponent,
    CreationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
