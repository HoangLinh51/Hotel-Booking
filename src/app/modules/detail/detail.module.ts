import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsComponent } from './page/comments/comments.component';
import { DecripComponent } from './page/decrip/decrip.component';
import { ImageComponent } from './page/image/image.component';
import { InforHostedComponent } from './page/infor-hosted/infor-hosted.component';
import { MapComponent } from './page/map/map.component';
import { PlanceOffersComponent } from './page/plance-offers/plance-offers.component';
import { ReviewComponent } from './page/review/review.component';
import { VilaOwnerComponent } from './page/vila-owner/vila-owner.component';
import { PaymentsComponent } from './page/vila-owner/payments/payments.component';

@NgModule({
  declarations: [
    PageComponent,
    DecripComponent,
    ImageComponent,
    VilaOwnerComponent,
    ReviewComponent,
    MapComponent,
    InforHostedComponent,
    PlanceOffersComponent,
    CommentsComponent,
    PaymentsComponent,
  ],
  imports: [DetailRoutingModule, SharedModule],
})
export class DetailModule {}
