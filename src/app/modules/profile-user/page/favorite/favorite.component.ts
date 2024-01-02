import { Component } from '@angular/core';
import { ListBeach } from 'src/app/data/modal/beach';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  private FAVORITE_KEY = 'list-favorite';

  listFavorite: ListBeach[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.listFavorite = this.localStorageService.getItem(this.FAVORITE_KEY);
  }
}
