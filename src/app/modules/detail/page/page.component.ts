import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  post!: ListBeach | undefined;
  user!: LUser | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private localStorage: LocalStorageService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getProductById(Number(id));
    console.log('product-id', this.postService.getProductById(Number(id)));

    const a = this.localStorage.getItem('date' + this.user?.id);
    if (a === null) {
      this.router.navigate(['/']);
    }
  }
}
