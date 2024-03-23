import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { fakeBackendProvider } from './data/helpers/fake-backend';
import { LocalStorageService } from './data/service/localstorage.service';
import { PostService } from './data/service/post.service';
import { CategoryService } from './data/service/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NavigatePage } from './modules/common/navigate';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    fakeBackendProvider,
    PostService,
    LocalStorageService,
    CategoryService,
    NavigatePage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
