import { Component, Input } from '@angular/core';
import { FAVORITE_KEY } from 'src/app/data/constant/localstorage-key';
import { Beach } from 'src/app/data/modal/beach';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css',
})
export class BeachComponent {
  @Input() postSelected: Beach[] = [];
  public linkDetail = '';

  // status: boolean = false;
  // favoriteStatus!: boolean;
  showNextButton = true;
  showPrevButton = false;
  currentImageIndex: number[] = [];
  user!: LUser | null;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
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
  //lấy list favorite lên -> tìm số index (với giá trị tìm là id ) nếu index khác -1 thì xóa index đó đi -> lưu xuống localstorage -> loasd lại trạng thái

  addFavorite(beach: Beach) {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];
    const index = favoritePosts.findIndex(
      (favoritePost: Beach) => favoritePost.id === beach.id
    );
    console.log('index', index);
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
