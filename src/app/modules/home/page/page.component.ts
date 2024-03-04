import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ListBeach } from 'src/app/data/modal/beach';
import { Category } from 'src/app/data/modal/category';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { CategoryService } from 'src/app/data/service/category.service';
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

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) {
    this.posts = this.postService.getAllPost();
    this.user = this.authService.userValue;
    this.uniqueCategories;
    this.category = this.categoryService.getCategoryinLocalstorage();
    this.getIcon();
  }

  uniqueCategories(categories: any) {
    this.posts.filter((post) => post.categories === categories);
    console.log(this.posts.filter((post) => post.categories === categories));
  }

  getIcon() {
    this.category.forEach((category) => {
      category.icon = this.sanitizer.bypassSecurityTrustHtml(category.icon);
    });
  }
}
