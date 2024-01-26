import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  posts: any[];
  user!: LUser | null;

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {
    this.posts = this.postService.getAllPost();

    this.user = this.authService.userValue;
  }
  get uniqueCategories(): string[] {
    return Array.from(new Set(this.posts.map((posts) => posts.categories)));
  }

  changeActive(event: number) {
    this.activeIndex = event;

    
  }
}
