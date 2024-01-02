import { Component } from '@angular/core';
import { PostService } from 'src/app/data/service/post.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  activeIndex: number = 0;
  posts: any[];

  constructor(private postService: PostService) {
    this.posts = this.postService.getAllPost();
    console.log(this.uniqueCategories);
  }
  get uniqueCategories(): string[] {
    return Array.from(new Set(this.posts.map((posts) => posts.categories)));
  }

  changeActive(event: number) {
    this.activeIndex = event;
    console.log(this.activeIndex);
  }
}
