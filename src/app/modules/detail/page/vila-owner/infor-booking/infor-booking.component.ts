import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guest } from 'src/app/data/modal/guest';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-infor-booking',
  templateUrl: './infor-booking.component.html',
  styleUrl: './infor-booking.component.css',
})
export class InforBookingComponent {
  @Input() post: any;
  @Input() activeIndex: any;
  @Output() moveToNextStep = new EventEmitter<void>();

  BOOKING_KEY = 'booking';
  form!: FormGroup;
  user!: LUser | null;
  guest: Guest[] | undefined;

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      guest: ['', Validators.required],
      note: ['', Validators.required],
      post: [this.post, Validators.required],
    });
    this.guest = [
      { name: '1 guest', id: '1' },
      { name: '2 guest', id: '2' },
      { name: '3 guest', id: '3' },
      { name: '4 guest', id: '4' },
      { name: '5 guest', id: '5' },
    ];
  }

  onSubmit() {
    if (this.form.valid) {
      const date = this.localStorageService.getItem('date' + this.user?.id);
      const ifUser = this.form.value;
      const b = { ifUser, date };
      localStorage.setItem('abc' + this.user?.id, JSON.stringify(b));
      this.moveToNextStep.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
