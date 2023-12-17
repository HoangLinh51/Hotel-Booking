import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../layout/nav/nav.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [CommonModule, RouterModule, TabViewModule],
  declarations: [NavComponent, HeaderComponent, FooterComponent],
  exports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
