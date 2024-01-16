import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrl: './history-detail.component.css',
})
export class HistoryDetailComponent {
  constructor(private router: Router) {}
  goBackToList() {
    this.router.navigate(['/booked-trip']);
  }
}
