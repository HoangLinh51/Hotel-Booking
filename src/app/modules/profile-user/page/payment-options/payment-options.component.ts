import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LPayMent } from 'src/app/data/modal/payment';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrl: './payment-options.component.css',
})
export class PaymentOptionsComponent {
  private PAYMENT_KEY = 'payment-options';
  visible: boolean = false;
  visible2: boolean = false;
  form!: FormGroup;
  date!: Date;
  payment!: LPayMent;
  user!: LUser | null;

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      validUntil: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required],
      checkBox: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.user = this.authService.userValue;
    this.payment = this.localStorageService.getItem(
      this.PAYMENT_KEY + this.user?.id
    );
    console.log('ngOnInit', this.payment);
  }
  get f() {
    return this.form.controls;
  }

  showDialog(val: boolean) {
    this.visible = val;
  }
  showDialog2(val: boolean) {
    this.visible2 = val;
  }

  onSubmit() {
    debugger;
    this.payment = this.form.value;
    console.log('this.payment-->', this.payment);
    this.localStorageService.saveItem(
      this.PAYMENT_KEY + this.user?.id,
      this.payment
    );
  }

  deleteCard() {
    this.localStorageService.delete(this.PAYMENT_KEY + this.user?.id);
    window.location.reload();
  }
}
