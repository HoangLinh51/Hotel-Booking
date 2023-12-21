import { NgModule } from '@angular/core';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [AboutUsRoutingModule, SharedModule],
})
export class AboutUsModule {}
