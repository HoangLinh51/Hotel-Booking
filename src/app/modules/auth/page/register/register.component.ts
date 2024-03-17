import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/data/service/auth.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/data/service/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.minLength(8), Validators.email],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          this.vietnamesePhoneNumberValidator(),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit

    if (this.form.valid) {
      this.loading = true;
      this.AuthService.register(this.form.value)
        .pipe(first())
        .subscribe({
          next: () => {
            this.alertService.success('Registration successful', {
              keepAfterRouteChange: true,
            });
            this.router.navigate(['/login'], { relativeTo: this.route });
          },
          error: (error) => {
            console.log('error', error);
            this.alertService.error(error);
            this.loading = false;
          },
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
