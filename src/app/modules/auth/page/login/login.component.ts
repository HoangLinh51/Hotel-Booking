import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { LUser } from 'src/app/data/modal/user';
import { AlertService } from 'src/app/data/service/alert.service';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form!: FormGroup;
  loading = false;
  user: LUser | null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .pipe(first())
        .subscribe({
          next: () => {
            const returnUrl =
              this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error) => {
            console.log(error);
            this.alertService.error(error);
            this.loading = false;
          },
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
