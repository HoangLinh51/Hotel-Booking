import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrl: './payment-options.component.css',
})
export class PaymentOptionsComponent {
  visible: boolean = false;

  showDialog(val: boolean) {
    this.visible = val;
  }
}
