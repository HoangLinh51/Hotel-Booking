import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infor-hosted',
  templateUrl: './infor-hosted.component.html',
  styleUrls: ['./infor-hosted.component.css'],
})
export class InforHostedComponent {
  @Input() post: any;
}
