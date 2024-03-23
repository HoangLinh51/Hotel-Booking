import { Component, Input } from '@angular/core';
import { Beach } from 'src/app/data/modal/beach';
import { InputSearch } from 'src/app/data/modal/booking';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css',
})
export class BeachComponent {
  @Input() postSelected: Beach[] = [];
  @Input() inputSearch!: InputSearch[];
}
