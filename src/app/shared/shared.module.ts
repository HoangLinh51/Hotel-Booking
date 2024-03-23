import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../layout/header/header.component';
import { HeaderNonsearchComponent } from '../layout/header-nonsearch/header-nonsearch.component';
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
import { ToastrModule } from 'ngx-toastr';

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
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 1500,
      progressBar: true,
    }),
  ],
  declarations: [HeaderComponent, FooterComponent, HeaderNonsearchComponent],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TabViewModule,
    DialogModule,
    MenuModule,
    HeaderComponent,
    HeaderNonsearchComponent,
    FooterComponent,
    ReactiveFormsModule,
    DataViewModule,
    CalendarModule,
    StepsModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
    ToastrModule,
  ],
})
export class SharedModule {}
