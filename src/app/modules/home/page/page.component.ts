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
  date: FormGroup;
  user!: LUser | null;

  constructor(
    private postService: PostService,
    private form: FormBuilder,
    private localstorage: LocalStorageService,
    private authService: AuthService
  ) {
    this.posts = this.postService.getAllPost();
    this.date = this.form.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });

    this.user = this.authService.userValue;
  }
  get uniqueCategories(): string[] {
    return Array.from(new Set(this.posts.map((posts) => posts.categories)));
  }

  onSubmit(): void {
    if (this.date.valid) {
      const checkIn = new Date(this.date.value.checkIn);
      const checkOut = new Date(this.date.value.checkOut);

      console.log('date', checkIn, checkOut);
      if (!isNaN(checkIn.getTime()) && !isNaN(checkOut.getTime())) {
        const timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
        const numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const date = { numberOfDays, checkIn, checkOut };
        this.localstorage.saveItem('date' + this.user?.id, date);
      }
    }
  }

  changeActive(event: number) {
    this.activeIndex = event;
    console.log(this.activeIndex);
  }
}
