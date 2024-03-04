import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from '../layout/nav/nav.component';
import { FooterComponent } from '../layout/footer/footer.component';

import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { CalendarModule } from 'primeng/calendar';
import { StepsModule } from 'primeng/steps';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TabViewModule,
    MenuModule,
    DialogModule,
    ReactiveFormsModule,
    DataViewModule,
    CalendarModule,
    StepsModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
  ],
  declarations: [NavComponent, HeaderComponent, FooterComponent],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TabViewModule,
    DialogModule,
    MenuModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    DataViewModule,
    CalendarModule,
    StepsModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
  ],
})
export class SharedModule {}
