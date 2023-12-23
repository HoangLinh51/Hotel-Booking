import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileUserRoutingModule } from './profile-user-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [ProfileUserRoutingModule, SharedModule],
})
export class ProfileUserModule {}
