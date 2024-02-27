import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public isAuthorized = false;
  user?: LUser | null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
