import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './page/post/post.component';
import { ShowmapComponent } from './page/showmap/showmap.component';

@NgModule({
  declarations: [PageComponent, ShowmapComponent, PostComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
