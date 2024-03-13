import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DATEINPUT_KEY } from 'src/app/data/constant/localstorage-key';
import { DateBooked } from 'src/app/data/modal/booking';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  public linkAboutus = '/about-us';
  date!: FormGroup;
  user?: LUser | null;
  dateStorage!: DateBooked | null;

  constructor(
    private authService: AuthService,
    private form: FormBuilder,
    private localStorageService: LocalStorageService
  ) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.date = this.form.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
    this.getDateStorage();
  }
  addNewItem(value: string) {
    console.log('input header--->', value);
    this.newItemEvent.emit(value);
  }

  onSubmit(): void {
    if (this.date.valid) {
      const checkInDate = new Date(this.date.value.checkIn);
      const checkOutDate = new Date(this.date.value.checkOut);

      const checkIn = checkInDate.toISOString().slice(0, 10);
      const checkOut = checkOutDate.toISOString().slice(0, 10);

      if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
        const timeDiff = Math.abs(
          checkOutDate.getTime() - checkInDate.getTime()
        );
        const numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const date = { numberOfDays, checkIn, checkOut };
        this.localStorageService.saveItem(DATEINPUT_KEY + this.user?.id, date);
      }
    }
  }

  getDateStorage() {
    const date = this.localStorageService.getItem(
      DATEINPUT_KEY + this.user?.id
    );
    if (date) {
      this.dateStorage = date;
    } else {
      this.dateStorage = null;
    }
  }

  logout() {
    this.authService.logout();
  }
}
