import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Beach } from 'src/app/data/modal/beach';
import { InputSearch } from 'src/app/data/modal/booking';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { PostService } from 'src/app/data/service/post.service';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';

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
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });

    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getProductById(Number(id));
    console.log('product-id', this.postService.getProductById(Number(id))?.id);
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
    });
    if (!this.checkIn) {
      this.router.navigateByUrl('/');
      this.toastrService.warning(
        'You need to enter the check-in or check-out date',
        'Warning'
      );
      this.router.navigate(['/']);
    }
  }
}
