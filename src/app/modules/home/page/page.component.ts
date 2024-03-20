import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BOOKED_KEY } from 'src/app/data/constant/localstorage-key';
import { Beach } from 'src/app/data/modal/beach';
import {
  DateBooked,
  InputSearch,
  ProductBooked,
} from 'src/app/data/modal/booking';
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
  dataInput!: FormGroup;
  inputSearch!: InputSearch;

  private _productBooked: ProductBooked[] = [];
  private _date!: DateBooked;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataInput = this.formBuilder.group({
      input: [''],
      dateInput: [''],
    });
    this.posts = this.postService.getAllPost();
    this.user = this.authService.userValue;
    this.category = this.categoryService.getCategoryinLocalstorage();
    this.productBooked = this.localStorageService.getItem(BOOKED_KEY) || [];
    this.getIcon();
    this.onChangeTab(this.activeIndex, this.dataInput);
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

  addItem(newItem: InputSearch) {
    console.log('newItem', newItem);
    if (newItem.input !== '') {
      this.postSearch = this.postService.searchPosts(newItem.input);
      if (this.productBooked) {
        this.productBooked.forEach((product: any) => {
          if (
            product.dateBooked.checkIn === newItem.dateInput.checkIn &&
            product.dateBooked.checkOut === newItem.dateInput.checkOut
          ) {
            this.postSearch = this.postSearch.filter(
              (listProduct: { id: number }) =>
                listProduct.id !== product.idProduct
            );
          }
        });
      }
      this.router.navigate(['/'], {
        queryParams: {
          checkIn: newItem.dateInput.checkIn,
          checkOut: newItem.dateInput.checkOut,
        },
      });
    } else {
      this.router.navigate(['/'], {
        queryParams: {
          checkIn: newItem.dateInput.checkIn,
          checkOut: newItem.dateInput.checkOut,
        },
      });
    }
  }

  onChangeTab($event: number, newItem: any) {
    this.productBooked = this.localStorageService.getItem(BOOKED_KEY) || [];
    if (newItem) {
      const categorySelected = this.category[$event];

      // console.log('in If onchange tab:--->', newItem);
      this.postSelected = this.posts.filter(
        (i) => i.categories == categorySelected.name
      );
      if (this.productBooked) {
        this.productBooked.forEach((product: any) => {
          if (
            product.dateBooked.checkIn === newItem.dateInput.checkIn &&
            product.dateBooked.checkOut === newItem.dateInput.checkOut
          ) {
            this.postSelected = this.postSelected.filter(
              (listProduct: { id: number }) =>
                listProduct.id !== product.idProduct
            );
          }
        });
      }
    }
  }
}
