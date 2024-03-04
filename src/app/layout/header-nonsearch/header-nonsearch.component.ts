import { Component } from '@angular/core';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-header-nonsearch',
  templateUrl: './header-nonsearch.component.html',
  styleUrl: './header-nonsearch.component.css',
})
export class HeaderNonsearchComponent {
  public linkAboutus = '/about-us';
  user?: LUser | null;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authService.logout();
  }
}
