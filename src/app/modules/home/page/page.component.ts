import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListBeach } from 'src/app/data/modal/beach';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
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

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {
    this.posts = this.postService.getAllPost();

    this.user = this.authService.userValue;
    this.uniqueCategories;
  }

  uniqueCategories(categories: any) {
    this.posts.filter((post) => post.categories === categories);
    console.log(this.posts.filter((post) => post.categories === categories));
  }

  changeActive(event: number) {
    this.activeIndex = event;
  }
}
