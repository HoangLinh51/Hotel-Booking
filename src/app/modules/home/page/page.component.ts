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
  inputSearch: InputSearch = {
    dateInput: {
      checkIn: '',
      checkOut: '',
    },
    input: '',
  };
  categoryNameSelected: string = '';
  isSearch: boolean = false;

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
    this.user = this.authService.userValue;
    this.category = this.categoryService.getCategoryinLocalstorage();
    this.productBooked = this.localStorageService.getItem(BOOKED_KEY) || [];
    this.getIcon();
    this.listProduct();
    this.changeTab(0);
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

  listProduct() {
    const posts = this.postService.getAllPost();
    let postList = posts;

    if (this.categoryNameSelected !== '') {
      postList = posts.filter(
        (i) => i.categories === this.categoryNameSelected
      );
    }

    if (this.inputSearch.input !== '') {
      postList = this.postService.searchPosts(this.inputSearch.input);
    }

    if (this.productBooked) {
      this.productBooked.forEach((productBooked: any) => {
        if (
          productBooked.dateBooked.checkIn ===
            this.inputSearch.dateInput.checkIn &&
          productBooked.dateBooked.checkOut ===
            this.inputSearch.dateInput.checkOut
        ) {
          postList = postList.filter(
            (listProduct) =>
              !this.productBooked.find(
                (booked) => listProduct.id === booked.idProduct
              )
          );
          this.isSearch = true;
        }
      });
    }

    this.navigateQueryParams(
      this.inputSearch.dateInput.checkIn,
      this.inputSearch.dateInput.checkOut
    );

    if (this.inputSearch.input !== '') {
      this.postSearch = postList;
    } else {
      this.postSelected = postList;
    }
  }

  changeTab($event: number) {
    this.categoryNameSelected = this.category[$event].name;
    this.listProduct();
  }

  searchProduct(newItem: InputSearch) {
    this.inputSearch = newItem;
    this.listProduct();
  }

  navigateQueryParams(checkIn: string, checkOut: string) {
    this.router.navigate(['/'], {
      queryParams: {
        checkIn: checkIn,
        checkOut: checkOut,
      },
    });
  }
}
