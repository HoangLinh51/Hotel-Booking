import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { ShowmapComponent } from './showmap/showmap.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    PostComponent,
    ShowmapComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HomePageModule {}
