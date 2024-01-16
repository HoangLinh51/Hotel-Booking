import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decrip',
  templateUrl: './decrip.component.html',
  styleUrls: ['./decrip.component.css'],
})
export class DecripComponent {
  @Input() post: any;
}
