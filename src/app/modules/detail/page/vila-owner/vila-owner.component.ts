import { Component } from '@angular/core';
@Component({
  selector: 'app-vila-owner',
  templateUrl: './vila-owner.component.html',
  styleUrls: ['./vila-owner.component.css'],
})
export class VilaOwnerComponent {
  visible: boolean = false;

  showdialog(val: boolean) {
    this.visible = val;
  }
}
