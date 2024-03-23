import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FAVORITE_KEY } from 'src/app/data/constant/localstorage-key';
import { Beach } from 'src/app/data/modal/beach';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';
import { NavigatePage } from 'src/app/modules/common/navigate';

@Component({
  selector: 'app-image-home',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageHomeComponent implements OnInit {
  @Input() beach!: Beach;
  user!: LUser | null;

  checkIn!: string;
  checkOut!: string;
  showNextButton: boolean = true;
  showPrevButton: boolean = false;
  currentImageIndex: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private navigatePage: NavigatePage,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
    });
    this.loadFavoriteStatus();
  }

  changeImage(isNext: boolean) {
    const maxIndex = this.beach.image.length - 1;
    if (this.currentImageIndex < maxIndex && isNext) {
      this.currentImageIndex++;
    } else if (this.currentImageIndex > 0 && !isNext) {
      this.currentImageIndex--;
    }
    this.getCurrentImageSource(this.currentImageIndex);
    this.showNextButton = this.currentImageIndex < maxIndex;
    this.showPrevButton = this.currentImageIndex > 0;
  }

  getCurrentImageSource(abc: number) {
    return this.beach.image[abc];
  }

  navigate(stastus: boolean, id: number) {
    this.navigatePage.navigateDetail(
      stastus,
      this.beach.id,
      this.router,
      this.checkIn,
      this.checkOut
    );
  }

  loadFavoriteStatus() {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];
    this.beach.isFavorite = false;
    for (let i = 0; i < favoritePosts.length; i++) {
      if (favoritePosts[i].id === this.beach.id) {
        this.beach.isFavorite = true;
      }
    }
  }

  addFavorite(beach: Beach) {
    const favoritePosts =
      this.localStorageService.getItem(FAVORITE_KEY + this.user?.id) || [];
    const index = favoritePosts.findIndex(
      (favoritePost: Beach) => favoritePost.id === beach.id
    );
    if (index !== -1) {
      favoritePosts.splice(index, 1);
      this.toastrService.warning('Removed from favorites list', 'Success');
    } else {
      this.toastrService.success('Added to favorites list', 'Success');
      favoritePosts.push(beach);
    }

    this.localStorageService.saveItem(
      FAVORITE_KEY + this.user?.id,
      favoritePosts
    );
    this.loadFavoriteStatus();
  }
}
