import { Component, Input } from '@angular/core';
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
  BOOKING_KEY = 'booking';
  user!: LUser | null;
  form!: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      total: ['', Validators.required],
      payment: ['', Validators.required],
    });
  }

  onSubmit() {
    const a =
      this.localStorageService.getItem(this.BOOKING_KEY + this.user?.id) || {};
    if (!Array.isArray(a['items']) || !a['items']) {
      a['items'] = [];
    }
    a['payment'].push(this.form.value);
    console.log(a);
    this.localStorageService.saveItem(this.BOOKING_KEY + this.user?.id, a);
  }
}
