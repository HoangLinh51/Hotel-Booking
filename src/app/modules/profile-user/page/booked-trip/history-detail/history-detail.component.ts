import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrl: './history-detail.component.css',
})
export class HistoryDetailComponent {
  item: any;

  constructor(
    private router: Router,
    private localstorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.localstorage.data$.subscribe((data) => {
      this.item = data;
    });
  }

  goBackToList() {
    this.router.navigate(['/booked-trip']);
  }
}
