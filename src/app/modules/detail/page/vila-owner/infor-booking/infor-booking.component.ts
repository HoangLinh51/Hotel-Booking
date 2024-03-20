import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/data/modal/guest';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-infor-booking',
  templateUrl: './infor-booking.component.html',
  styleUrl: './infor-booking.component.css',
})
export class InforBookingComponent {
  @Input() post: any;
  @Input() activeIndex: any;
  @Output() moveToNextStep = new EventEmitter<void>();

  form!: FormGroup;
  user!: LUser | null;
  guest: Guest[] | undefined;
  checkIn!: string;
  checkOut!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.minLength(8), Validators.email],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          this.vietnamesePhoneNumberValidator(),
        ],
      ],
      guest: ['', Validators.required],
      note: [''],
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

  get f() {
    return this.form.controls;
  }

  vietnamesePhoneNumberValidator() {
    return (control: any) => {
      const phoneNumber = control.value;
      const phoneNumberPattern = /(84|\+84|0)(\d{9,10})/;
      const isValid = phoneNumberPattern.test(phoneNumber);
      return isValid ? null : { invalidPhoneNumber: true };
    };
  }
  calculateDays(checkIn: string, checkOut: string): number {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return numberOfDays;
  }

  onSubmit() {
    if (this.form.valid) {
      this.route.queryParams.subscribe((params) => {
        this.checkIn = params['checkIn'];
        this.checkOut = params['checkOut'];
      });
      const checkIn = this.checkIn;
      const checkOut = this.checkOut;
      const numberOfDays = this.calculateDays(checkIn, checkOut);
      const date = { checkIn, checkOut, numberOfDays };
      const ifUser = this.form.value;

      const b = { ifUser, date };
      localStorage.setItem('first-step' + this.user?.id, JSON.stringify(b));
      this.moveToNextStep.emit();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
