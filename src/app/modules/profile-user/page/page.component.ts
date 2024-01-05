import { Component } from '@angular/core';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  user: LUser | null;

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
  }
}
