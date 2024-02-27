import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PAYMENT_KEY } from 'src/app/data/constant/localstorage-key';
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
      PAYMENT_KEY + this.user?.id
    );
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
    this.localStorageService.saveItem(
      PAYMENT_KEY + this.user?.id,
      this.payment
    );
  }

  deleteCard() {
    this.localStorageService.delete(PAYMENT_KEY + this.user?.id);
    window.location.reload();
  }
}
