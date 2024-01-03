import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Guest } from 'src/app/data/modal/guest';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css',
})
export class PaymentsComponent {
  @Input() items: MenuItem[] | undefined;
  activeIndex: number = 0;
  value!: string;
  date!: Date;
  date2!: Date;
  guest: Guest[] | undefined;
  selectedGuest: Guest | undefined;

  ngOnInit() {
    this.items = [
      { label: 'container 1 ' },
      { label: 'container 2' },
      { label: 'container 3' },
    ];
    this.guest = [
      { name: '1 guest', id: 'NY' },
      { name: '2 guest', id: 'RM' },
      { name: '3 guest', id: 'LDN' },
      { name: '4 guest', id: 'IST' },
      { name: '5 guest', id: 'PRS' },
    ];
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
    console.log('event ', event);
  }
}
