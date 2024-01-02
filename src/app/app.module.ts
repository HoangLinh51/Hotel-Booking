import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { fakeBackendProvider } from './data/helpers/fake-backend';
import { PostService } from './data/service/post.service';
import { LocalStorageService } from './data/service/localstorage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [fakeBackendProvider, PostService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
