import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListBeach } from 'src/app/data/modal/beach';
import { PostService } from 'src/app/data/service/post.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  post!: ListBeach | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getProductById(Number(id));
  }
}
