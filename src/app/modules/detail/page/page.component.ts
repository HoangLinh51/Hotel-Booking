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
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.post = this.postService.getProductById(Number(this.id));
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
    });
    this.checkDate();
  }

  checkDate() {
    const sumDate = (date: string | Date, offsetDays = 0) => {
      const adjustedDate = new Date(date);
      adjustedDate.setDate(adjustedDate.getDate() + offsetDays);
      return formatDate(adjustedDate);
    };

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const months = date.getMonth() + 1;
      const dt = date.getDate();
      const formattedDay = dt < 10 ? '0' + dt : dt.toString();
      const formattedMonth = months < 10 ? '0' + months : months.toString();
      return `${year}-${formattedMonth}-${formattedDay}`;
    };

    this.route.queryParams.subscribe((params) => {
      if (!params['checkIn']) {
        const checkIn = formatDate(new Date());
        const checkOut = sumDate(new Date(), 1);

        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { checkIn: checkIn, checkOut: checkOut },
          queryParamsHandling: 'merge',
          replaceUrl: true,
        });
      }
    });
  }
}
