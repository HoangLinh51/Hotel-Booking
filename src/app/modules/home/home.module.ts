import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PageComponent } from './page/page.component';
import { BeachComponent } from './page/beach/beach.component';
import { ShowmapComponent } from './page/showmap/showmap.component';
import { ImageHomeComponent } from './page/beach/image/image.component';
import { BodyComponent } from './page/beach/body/body.component';

@NgModule({
  declarations: [
    PageComponent,
    BeachComponent,
    ShowmapComponent,
    ImageHomeComponent,
    BodyComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
