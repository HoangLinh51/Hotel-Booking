import { Component } from '@angular/core';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public linkAboutus = '/about-us';
  user?: LUser | null;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
    console.log('this.user--->', this.user);
  }

  logout() {
    this.authService.logout();
  }
}
