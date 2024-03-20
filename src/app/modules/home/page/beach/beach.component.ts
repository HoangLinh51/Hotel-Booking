import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FAVORITE_KEY } from 'src/app/data/constant/localstorage-key';
import { Beach } from 'src/app/data/modal/beach';
import { InputSearch } from 'src/app/data/modal/booking';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css',
})
export class BeachComponent implements OnInit {
  @Input() postSelected: Beach[] = [];
  @Input() inputSearch!: InputSearch[];
  public linkDetail = '';
  checkIn!: string;
  checkOut!: string;

  showNextButton = true;
  showPrevButton = false;
  currentImageIndex: number[] = [];
  user!: LUser | null;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];

      // console.log(
      //   'checkIn oninit',
      //   this.checkIn,
      //   'checkOut oninit',
      //   this.checkOut
      // );
    });
    this.user = this.authService.userValue;
    this.loadFavoriteStatus();
  }

  changeImage(isNext: boolean, index: number): void {
    const maxIndex = this.postSelected[index].image.length - 1;
    this.currentImageIndex[index] =
      (this.currentImageIndex[index] + (isNext ? 1 : -1) + (maxIndex + 1)) %
      (maxIndex + 1);

    this.showNextButton = this.currentImageIndex[index] < maxIndex;
    this.showPrevButton = this.currentImageIndex[index] > 0;
  }

  getCurrentImageSource(index: number) {
    return this.postSelected[index].image[0];
  }

  loadFavoriteStatus() {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];

    this.postSelected.forEach((beach) => {
      const isFavorite = favoritePosts.some(
        (post: any) => post.id === beach.id
      );
      beach.isFavorite = isFavorite;
    });
  }

  addFavorite(beach: Beach) {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];
    const index = favoritePosts.findIndex(
      (favoritePost: Beach) => favoritePost.id === beach.id
    );
    // console.log('index', index);
    if (index !== -1) {
      favoritePosts.splice(index, 1);
    } else {
      favoritePosts.push(beach);
    }

    this.localStorageService.saveItem(
      FAVORITE_KEY + this.user?.id,
      favoritePosts
    );
    this.loadFavoriteStatus();
  }
}
