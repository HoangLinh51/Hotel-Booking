import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateInput, InputSearch } from 'src/app/data/modal/booking';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  public linkAboutus = '/about-us';
  user?: LUser | null;
  dateInput!: DateInput;
  valueInput!: InputSearch;
  input: string = '';
  inputCheckIn: string = '';
  inputCheckOut: string = '';
  checkIn!: string;
  checkOut!: string;
  visible: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
    });
  }

  getDateinFormat(date: Date) {
    const year = date.getFullYear();
    const months = date.getMonth() + 1;
    const dt = date.getDate();
    const formattedDay = dt < 10 ? '0' + dt : dt.toString();
    const formattedmonth = months < 10 ? '0' + months : months.toString();
    return year + '-' + formattedmonth + '-' + formattedDay;
  }

  selectCheckin(event: any) {
    const date = this.getDateinFormat(event);
    this.inputCheckIn = date;
  }

  selectCheckout(event: any) {
    const date = this.getDateinFormat(event);
    this.inputCheckOut = date;
  }

  inputSearch() {
    const sumDate = (date: string | Date, offsetDays = 0) => {
      const adjustedDate = new Date(date);
      adjustedDate.setDate(adjustedDate.getDate() + offsetDays);
      return this.getDateinFormat(adjustedDate);
    };

    let checkIn = this.inputCheckIn
      ? this.getDateinFormat(new Date(this.inputCheckIn))
      : '';
    let checkOut = this.inputCheckOut
      ? this.getDateinFormat(new Date(this.inputCheckOut))
      : '';

    if (!this.input) {
      if (!this.inputCheckIn && !this.inputCheckOut) {
        checkIn = this.getDateinFormat(new Date());
        checkOut = sumDate(new Date(), 1);
      } else if (!this.inputCheckIn && this.inputCheckOut) {
        checkIn = sumDate(this.inputCheckOut, -1);
      } else if (this.inputCheckIn && !this.inputCheckOut) {
        checkOut = sumDate(this.inputCheckIn, 1);
      }
    } else if (this.input) {
      if (!this.inputCheckIn && !this.inputCheckOut) {
        checkIn = this.getDateinFormat(new Date());
        checkOut = sumDate(new Date(), 1);
      } else if (!this.inputCheckIn && this.inputCheckOut) {
        checkIn = sumDate(this.inputCheckOut, -1);
      } else if (this.inputCheckIn && !this.inputCheckOut) {
        checkOut = sumDate(this.inputCheckIn, 1);
      }
    }

    const dateInput = { checkIn, checkOut };
    this.emitNewItemEvent(this.input, dateInput);
  }

  emitNewItemEvent(input: string, dateInput: any) {
    this.valueInput = { dateInput, input };
    this.newItemEvent.emit(this.valueInput);
  }

  logout() {
    this.authService.logout();
  }

  showdialogSearch(val: boolean) {
    this.visible = val;
  }
}
