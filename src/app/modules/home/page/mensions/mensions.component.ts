import { Component, Input } from '@angular/core';
import { FAVORITE_KEY } from 'src/app/data/constant/localstorage-key';
import { ListBeach } from 'src/app/data/modal/beach';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';
import { PostService } from 'src/app/data/service/post.service';

@Component({
  selector: 'app-mensions',
  templateUrl: './mensions.component.html',
  styleUrl: './mensions.component.css',
})
export class MensionsComponent {
  @Input() category!: string;
  public linkDetail = '/detail';

  listBeach: ListBeach[] = [];
  favoriteStatus: boolean[] = [];
  showNextButton = true;
  showPrevButton = false;
  currentImageIndex: number[] = [];
  user!: LUser | null;

  constructor(
    private postService: PostService,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
    this.listBeach = this.postService.getProductsByCategory(this.category);
    this.restoreFavoriteStatus();
  }

  changeImage(isNext: boolean, index: number): void {
    const maxIndex = this.listBeach[index].image.length - 1;
    this.currentImageIndex[index] =
      (this.currentImageIndex[index] + (isNext ? 1 : -1) + (maxIndex + 1)) %
      (maxIndex + 1);

    this.showNextButton = this.currentImageIndex[index] < maxIndex;
    this.showPrevButton = this.currentImageIndex[index] > 0;
  }

  getCurrentImageSource(index: number) {
    return this.listBeach[index].image[0];
  }

  restoreFavoriteStatus(): void {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];
    this.listBeach.forEach((beach, index) => {
      this.favoriteStatus[index] = favoritePosts.some(
        (post: any) => post.id === beach.id
      );
    });
  }

  toggleFavorite(beach: any, index: number): void {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];
    const postIndex = favoritePosts.findIndex((p: any) => p.id === beach.id);

    if (postIndex !== -1) {
      favoritePosts.splice(postIndex, 1);
      this.favoriteStatus[index] = false;
    } else {
      favoritePosts.push(beach);
      this.favoriteStatus[index] = true;
    }

    this.localStorageService.saveItem(
      FAVORITE_KEY + this.user?.id,
      favoritePosts
    );
  }
}
