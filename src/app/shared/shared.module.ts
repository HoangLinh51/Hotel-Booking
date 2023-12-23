import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../layout/nav/nav.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [CommonModule, RouterModule, TabViewModule, MenuModule],
  declarations: [NavComponent, HeaderComponent, FooterComponent],
  exports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    MenuModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
