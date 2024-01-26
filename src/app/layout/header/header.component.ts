import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public linkAboutus = '/about-us';
  date!: FormGroup;
  user?: LUser | null;

  constructor(
    private authService: AuthService,
    private form: FormBuilder,
    private localstorage: LocalStorageService
  ) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.date = this.form.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.date.valid) {
      const checkIn = new Date(this.date.value.checkIn);
      const checkOut = new Date(this.date.value.checkOut);

      if (!isNaN(checkIn.getTime()) && !isNaN(checkOut.getTime())) {
        const timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
        const numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const date = { numberOfDays, checkIn, checkOut };
        this.localstorage.saveItem('date' + this.user?.id, date);
      }
    }
  }

  logout() {
    this.authService.logout();
  }
}
