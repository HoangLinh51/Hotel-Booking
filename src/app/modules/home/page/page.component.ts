import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  BOOKED_KEY,
  DATEINPUT_KEY,
} from 'src/app/data/constant/localstorage-key';
import { ListBeach } from 'src/app/data/modal/beach';
import { DateBooked, ProductBooked } from 'src/app/data/modal/booking';
import { Category } from 'src/app/data/modal/category';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { CategoryService } from 'src/app/data/service/category.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';
import { PostService } from 'src/app/data/service/post.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  activeIndex: number = 0;
  posts: ListBeach[];
  user!: LUser | null;
  category!: Category[];
  icon: any;
  postSelected: ListBeach[] = [];
  productBooked: ProductBooked[] = [];
  date!: DateBooked;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer,
    private localStorageService: LocalStorageService
  ) {
    this.posts = this.postService.getAllPost();
    this.user = this.authService.userValue;
    this.category = this.categoryService.getCategoryinLocalstorage();
    this.getIcon();
    this.onChangeTab(this.activeIndex);
  }

  getIcon() {
    this.category.forEach((category) => {
      category.icon = this.sanitizer.bypassSecurityTrustHtml(category.icon);
    });
  }

  onChangeTab($event: any) {
    this.productBooked = this.localStorageService.getItem(BOOKED_KEY) || [];
    this.date =
      this.localStorageService.getItem(DATEINPUT_KEY + this.user?.id) || '';
    const categorySelected = this.category[$event];
    this.postSelected = this.posts.filter(
      (i) => i.categories == categorySelected.name
    );
    if (this.productBooked) {
      this.productBooked.forEach((product: any) => {
        if (
          product.dateBooked.checkIn === this.date.checkIn &&
          product.dateBooked.checkOut === this.date.checkOut
        ) {
          this.postSelected = this.postSelected.filter(
            (p: { id: any }) =>
              !this.productBooked.find(
                (b: { idProduct: any }) => b.idProduct === p.id
              )
          );
        }
      });
    }
  }
}
