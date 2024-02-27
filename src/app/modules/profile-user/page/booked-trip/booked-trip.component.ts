import { Component } from '@angular/core';
import { BOOKING_KEY } from 'src/app/data/constant/localstorage-key';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-booked-trip',
  templateUrl: './booked-trip.component.html',
  styleUrl: './booked-trip.component.css',
})
export class BookedTripComponent {
  user!: LUser | null;
  post: any;
  constructor(
    private localstorage: LocalStorageService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.post = this.localstorage.getItem(BOOKING_KEY + this.user?.id);
  }

  passDataToService(data: any) {
    this.localstorage.setData(data);
  }
}
