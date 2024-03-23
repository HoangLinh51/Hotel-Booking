import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beach } from 'src/app/data/modal/beach';
import { NavigatePage } from 'src/app/modules/common/navigate';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  @Input() beach!: Beach;
  checkIn!: string;
  checkOut!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigatePage: NavigatePage
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
    });
  }

  navigate(stastus: boolean, id: number) {
    this.navigatePage.navigateDetail(
      stastus,
      id,
      this.router,
      this.checkIn,
      this.checkOut
    );
  }
}
