import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  activeIndex: number = 0;

  changeActive(event: number) {
    this.activeIndex = event;
    console.log(this.activeIndex);
  }
}
