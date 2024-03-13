import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  BOOKED_KEY,
  DATEINPUT_KEY,
} from 'src/app/data/constant/localstorage-key';
import { Beach } from 'src/app/data/modal/beach';
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
export class PageComponent implements OnInit {
  activeIndex: number = 0;
  posts: Beach[] = [];
  user!: LUser | null;
  category!: Category[];
  postSelected: Beach[] = [];
  postSearch: Beach[] = [];

  private _productBooked: ProductBooked[] = [];
  private _date!: DateBooked;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.posts = this.postService.getAllPost();
    this.user = this.authService.userValue;
    this.category = this.categoryService.getCategoryinLocalstorage();
    this.getIcon();
    this.onChangeTab(this.activeIndex);
  }

  get productBooked(): ProductBooked[] {
    return this._productBooked;
  }

  set productBooked(value: ProductBooked[]) {
    this._productBooked = value;
  }

  get date(): DateBooked {
    return this._date;
  }

  set date(value: DateBooked) {
    this._date = value;
  }

  getIcon() {
    this.category.forEach((category) => {
      category.icon = this.sanitizer.bypassSecurityTrustHtml(category.icon);
    });
  }

  onChangeTab($event: number) {
    this.productBooked = this.localStorageService.getItem(BOOKED_KEY) || [];
    this.date =
      this.localStorageService.getItem(DATEINPUT_KEY + this.user?.id) || '';
    const categorySelected = this.category[$event];

    console.log('this.categorySelected', $event);
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
            (listProduct: { id: number }) =>
              listProduct.id !== product.idProduct
          );
        }
      });
    }
  }

  addItem(newItem: string = '') {
    console.log('input in home page--->', typeof newItem);

    if (newItem !== '') {
      this.postSearch = this.postService.searchPosts(newItem);
      console.log('get product by category else: --->', this.postSearch);
    } else {
      window.location.reload();
    }
  }
}

// this.postSelected.map((post) => {
//   console.log('post.categories', post.categories);
//   this.postService.getProductsByCategory(post.categories);
// });
