import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileUserRoutingModule } from './profile-user-routing.module';
import { PageComponent } from './page/page.component';
import { PaymentOptionsComponent } from './page/payment-options/payment-options.component';
import { MyProfileComponent } from './page/my-profile/my-profile.component';
import { BookedTripComponent } from './page/booked-trip/booked-trip.component';
import { FavoriteComponent } from './page/favorite/favorite.component';

@NgModule({
  declarations: [
    PageComponent,
    MyProfileComponent,
    PaymentOptionsComponent,
    BookedTripComponent,
    FavoriteComponent,
  ],
  imports: [ProfileUserRoutingModule, SharedModule],
})
export class ProfileUserModule {}
