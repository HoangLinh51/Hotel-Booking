import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PaymentOptionsComponent } from './page/payment-options/payment-options.component';
import { MyProfileComponent } from './page/my-profile/my-profile.component';
import { BookedTripComponent } from './page/booked-trip/booked-trip.component';
import { FavoriteComponent } from './page/favorite/favorite.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'myprofile',
        pathMatch: 'full',
        component: MyProfileComponent,
      },
      {
        path: 'payment',
        component: PaymentOptionsComponent,
      },
      {
        path: 'booked-trip',
        component: BookedTripComponent,
      },
      {
        path: 'favorite',
        component: FavoriteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserRoutingModule {}
