import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PageComponent } from './page/page.component';
import { BeachComponent } from './page/beach/beach.component';
import { ShowmapComponent } from './page/showmap/showmap.component';

@NgModule({
  declarations: [PageComponent, BeachComponent, ShowmapComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
