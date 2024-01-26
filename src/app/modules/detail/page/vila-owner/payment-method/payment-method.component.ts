import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';
@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css',
})
export class PaymentMethodComponent {
  @Input() post: any;
  @Input() activeIndex: any;
  @Output() moveToNextStep = new EventEmitter<void>();
  BOOKING_KEY = 'booking';
  user!: LUser | null;
  form!: FormGroup;
  totalCost!: number;
  numberOfDate!: number;
  price!: number;
  guests!: number;

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      total: [this.totalCost, Validators.required],
      payment: ['', Validators.required],
    });
    this.loadStorageData();
  }

  loadStorageData() {
    const storedData =
      this.localStorageService.getItem('abc' + this.user?.id)! || [];
    const { ifUser, date } = storedData;
    this.numberOfDate = date.numberOfDays;
    this.guests = parseInt(ifUser.guest.id);
    this.price = ifUser.post.price;
  }

  onSubmit() {
    const bookings =
      this.localStorageService.getItem(this.BOOKING_KEY + this.user?.id) || [];
    const orderInfo =
      this.localStorageService.getItem('abc' + this.user?.id) || [];
    const payment = this.form.value;

    const combinedData = { orderInfo, payment };

    if (bookings) {
      bookings.push(combinedData);
      this.localStorageService.saveItem(
        this.BOOKING_KEY + this.user?.id,
        bookings
      );
      this.moveToNextStep.emit();
    }
  }
  calculateTotalCost() {
    this.totalCost = this.price * this.guests * this.numberOfDate;

    this.form.patchValue({ total: this.totalCost });

    return this.totalCost;
  }
}
