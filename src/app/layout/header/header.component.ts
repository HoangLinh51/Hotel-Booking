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
  date!: FormGroup;
  user?: LUser | null;
  dateInput!: DateInput;
  valueInput!: InputSearch;
  checkIn!: string;
  checkOut!: string;

  constructor(
    private authService: AuthService,
    private form: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.date = this.form.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
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

  emitNewItemEvent(input: string, dateInput: any) {
    this.valueInput = { dateInput, input };
    this.newItemEvent.emit(this.valueInput);
  }

  inputSearch(input: string) {
    if (input === '') {
      if (this.date.value.checkIn === '' && this.date.value.checkOut === '') {
        this.router.navigateByUrl('/').then(() => {
          window.location.reload();
        });
      } else if (
        this.date.value.checkIn === '' &&
        this.date.value.checkOut !== ''
      ) {
        const date = new Date(this.date.value.checkOut);
        const checkOut = this.getDateinFormat(date);
        date.setDate(date.getDate());
        const checkIn = (this.checkIn = date.toISOString().slice(0, 10));
        const dateInput = (this.dateInput = {
          checkIn,
          checkOut,
        });
        this.emitNewItemEvent(input, dateInput);
      } else if (
        this.date.value.checkIn !== '' &&
        this.date.value.checkOut !== ''
      ) {
        const checkIn = this.getDateinFormat(new Date(this.date.value.checkIn));
        const checkOut = this.getDateinFormat(
          new Date(this.date.value.checkOut)
        );
        const dateInput = {
          checkIn,
          checkOut,
        };
        this.emitNewItemEvent(input, dateInput);
      } else if (
        this.date.value.checkIn !== '' &&
        this.date.value.checkOut === ''
      ) {
        const date = new Date(this.date.value.checkIn);
        const checkIn = this.getDateinFormat(date);
        date.setDate(date.getDate() + 2);
        const checkOut = (this.checkOut = date.toISOString().slice(0, 10));
        const dateInput = (this.dateInput = {
          checkIn,
          checkOut,
        });
        this.emitNewItemEvent(input, dateInput);
      }
    } else if (input !== '') {
      if (this.date.value.checkIn === '' && this.date.value.checkOut === '') {
        const checkIn = (this.checkIn = '');
        const checkOut = (this.checkOut = '');
        const dateInput = (this.dateInput = {
          checkIn,
          checkOut,
        });
        this.emitNewItemEvent(input, dateInput);
      } else if (
        this.date.value.checkIn === '' &&
        this.date.value.checkOut !== ''
      ) {
        const date = new Date(this.date.value.checkOut);
        const checkOut = this.getDateinFormat(date);
        date.setDate(date.getDate());
        const checkIn = (this.checkIn = date.toISOString().slice(0, 10));
        const dateInput = (this.dateInput = {
          checkIn,
          checkOut,
        });
        this.emitNewItemEvent(input, dateInput);
      } else if (
        this.date.value.checkIn !== '' &&
        this.date.value.checkOut !== ''
      ) {
        const checkIn = this.getDateinFormat(new Date(this.date.value.checkIn));
        const checkOut = this.getDateinFormat(
          new Date(this.date.value.checkOut)
        );
        const dateInput = {
          checkIn,
          checkOut,
        };
        this.emitNewItemEvent(input, dateInput);
      } else if (
        this.date.value.checkIn !== '' &&
        this.date.value.checkOut === ''
      ) {
        const date = new Date(this.date.value.checkIn);
        const checkIn = this.getDateinFormat(date);
        date.setDate(date.getDate() + 2);
        const checkOut = (this.checkOut = date.toISOString().slice(0, 10));
        const dateInput = (this.dateInput = {
          checkIn,
          checkOut,
        });
        this.emitNewItemEvent(input, dateInput);
      }
    }
  }

  logout() {
    this.authService.logout();
  }
}
