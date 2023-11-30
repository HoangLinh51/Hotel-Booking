import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { DetailPageModule } from './detail-page/detail-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomePageModule, AppRoutingModule, DetailPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
