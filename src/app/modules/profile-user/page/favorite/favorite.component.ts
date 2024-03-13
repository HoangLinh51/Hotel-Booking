import { Component } from '@angular/core';
import { FAVORITE_KEY } from 'src/app/data/constant/localstorage-key';
import { Beach } from 'src/app/data/modal/beach';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  user!: LUser | null;
  listFavorite: Beach[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.listFavorite = this.localStorageService.getItem(
      FAVORITE_KEY + this.user?.id
    );
  }
}
