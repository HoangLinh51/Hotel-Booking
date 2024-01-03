import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrl: './payment-options.component.css',
})
export class PaymentOptionsComponent {
  private PAYMENT_KEY = 'payment-options';
  visible: boolean = false;
  form!: FormGroup;
  date!: Date;

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      validUntil: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required],
      checkBox: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  showDialog(val: boolean) {
    this.visible = val;
  }

  addPayment() {
    const payment = this.localStorageService.getItem(this.PAYMENT_KEY) || [];
    console.log(this.form.value);
    payment.push(this.form.value);
    this.localStorageService.saveItem(this.PAYMENT_KEY, payment);
  }
}
