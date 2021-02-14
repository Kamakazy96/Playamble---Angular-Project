import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { GamesComponent } from './games.component';
import { HiLoComponent } from './hi-lo/hi-lo.component';

const routes: Routes = [{
  path: '',
  component: GamesComponent,
  children: [
    {
        path: 'hilo',
        component: HiLoComponent,
    },
    {
      path: 'blackjack',
      component: BlackjackComponent,
  },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule { }
