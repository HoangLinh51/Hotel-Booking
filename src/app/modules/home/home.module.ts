import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PageComponent } from './page/page.component';
import { BeachComponent } from './page/beach/beach.component';
import { BoatsComponent } from './page/boats/boats.component';
import { CabinsComponent } from './page/cabins/cabins.component';
import { CampingComponent } from './page/camping/camping.component';
import { DesertComponent } from './page/desert/desert.component';
import { DomesComponent } from './page/domes/domes.component';
import { IslandComponent } from './page/island/island.component';
import { MensionsComponent } from './page/mensions/mensions.component';
import { NewComponent } from './page/new/new.component';
import { PoolsComponent } from './page/pools/pools.component';
import { ShowmapComponent } from './page/showmap/showmap.component';
import { SleepBoxComponent } from './page/sleep-box/sleep-box.component';

@NgModule({
  declarations: [
    PageComponent,
    ShowmapComponent,
    BeachComponent,
    BoatsComponent,
    CabinsComponent,
    CampingComponent,
    DesertComponent,
    DomesComponent,
    IslandComponent,
    MensionsComponent,
    NewComponent,
    PoolsComponent,
    SleepBoxComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
