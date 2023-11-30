import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DecripComponent } from './decrip/decrip.component';
import { ImageComponent } from './image/image.component';
import { VilaOwnerComponent } from './vila-owner/vila-owner.component';
import { ReviewComponent } from './review/review.component';
import { MapComponent } from './map/map.component';
import { InforHostedComponent } from './infor-hosted/infor-hosted.component';
import { FooterComponent } from './footer/footer.component';
import { DetailPageComponent } from './detail-page.component';
import { PlanceOffersComponent } from './plance-offers/plance-offers.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    DetailPageComponent,
    HeaderComponent,
    DecripComponent,
    ImageComponent,
    VilaOwnerComponent,
    ReviewComponent,
    MapComponent,
    InforHostedComponent,
    FooterComponent,
    PlanceOffersComponent,
    CommentsComponent,
  ],
  imports: [CommonModule],
})
export class DetailPageModule {}
