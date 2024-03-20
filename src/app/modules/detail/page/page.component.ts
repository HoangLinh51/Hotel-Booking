import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beach } from 'src/app/data/modal/beach';
import { InputSearch } from 'src/app/data/modal/booking';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { PostService } from 'src/app/data/service/post.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  post!: Beach | undefined;
  user!: LUser | null;
  inputSearch!: InputSearch;
  checkIn!: string;
  checkOut!: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getProductById(Number(id));
    console.log('product-id', this.postService.getProductById(Number(id)));
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
    });
  }
}
