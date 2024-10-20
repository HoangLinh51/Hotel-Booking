import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsComponent } from './page/comments/comments.component';
import { DecripComponent } from './page/title/title.component';
import { ImageComponent } from './page/image/image.component';
import { InforHostedComponent } from './page/infor-hosted/infor-hosted.component';
import { MapComponent } from './page/map/map.component';
import { PlanceOffersComponent } from './page/plance-offers/plance-offers.component';
import { ReviewComponent } from './page/review/review.component';
import { VilaOwnerComponent } from './page/vila-owner/vila-owner.component';
import { DatePipe } from '@angular/common';
import { InforBookingComponent } from './page/vila-owner/infor-booking/infor-booking.component';
import { PaymentMethodComponent } from './page/vila-owner/payment-method/payment-method.component';

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
    InforBookingComponent,
    PaymentMethodComponent,
  ],
  imports: [DetailRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class DetailModule {}
