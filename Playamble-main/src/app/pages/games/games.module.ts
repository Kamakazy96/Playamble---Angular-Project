import { NgModule } from '@angular/core';
import { GamesComponent } from './games.component';
import { HiLoComponent } from './hi-lo/hi-lo.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { GamesRoutingModule } from './games-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbOptionModule,
  NbSelectModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GamesComponent, HiLoComponent, BlackjackComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbOptionModule,
  ],
})
export class GamesModule {}
