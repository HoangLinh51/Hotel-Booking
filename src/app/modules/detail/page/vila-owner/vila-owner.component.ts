import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Guest } from 'src/app/data/modal/guest';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-vila-owner',
  templateUrl: './vila-owner.component.html',
  styleUrls: ['./vila-owner.component.css'],
})
export class VilaOwnerComponent {
  @Input() items: MenuItem[] | undefined;
  @Input() page!: MenuItem[];
  @Input() post: any;
  visible: boolean = false;
  form!: FormGroup;
  form2!: FormGroup;

  activeIndex: number = 0;
  date!: Date;
  date2!: Date;
  guest: Guest[] | undefined;
  selectedGuest: Guest | undefined;
  user!: LUser | null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.items = [
      { label: 'container 1 ' },
      { label: 'container 2' },
      { label: 'container 3' },
    ];

    this.page = [{ label: '' }, { label: '' }, { label: '' }];
    this.user = this.authService.userValue;
  }

  get f() {
    return this.form.controls;
  }
  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }
  showdialog(val: boolean) {
    this.visible = val;
  }

  moveToNextStep(): void {
    this.activeIndex++;
  }
}
