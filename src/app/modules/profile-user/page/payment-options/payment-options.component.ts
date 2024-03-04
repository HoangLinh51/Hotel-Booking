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
      checkBox: ['', [Validators.required]],
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
    if (this.form.valid) {
      const validUntilDate: Date = this.form.value.validUntil;

      const day = validUntilDate.getDate().toString().padStart(2, '0');
      const month = (validUntilDate.getMonth() + 1).toString().padStart(2, '0');
      const year = validUntilDate.getFullYear();

      const validUntilValue = `${day}.${month}.${year}`;

      const paymentData = {
        cardNumber: this.form.value.cardNumber,
        validUntil: validUntilValue,
        cvv: this.form.value.cvv,
        name: this.form.value.name,
        checkBox: this.form.value.checkBox,
      };

      this.localStorageService.saveItem(
        PAYMENT_KEY + this.user?.id,
        paymentData
      );
      window.location.reload();
    } else {
      this.form.markAllAsTouched();
    }
  }

  deleteCard() {
    this.localStorageService.delete(PAYMENT_KEY + this.user?.id);
    window.location.reload();
  }
}
