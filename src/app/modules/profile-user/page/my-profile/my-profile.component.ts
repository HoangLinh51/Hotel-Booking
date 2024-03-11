import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
})
export class MyProfileComponent {
  user: LUser | null;

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.user = this.authService.userValue;
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.user?.id],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      token: [this.user?.token],
    });
    this.form.valueChanges.subscribe(() => {
      this.saveInfor();
    });
  }
  saveInfor() {
    this.user = JSON.parse(localStorage.getItem('user')!);
    localStorage.setItem('user', JSON.stringify(this.form.value));
  }
}
