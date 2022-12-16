import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap31Page } from './cap31.page';

const routes: Routes = [
  {
    path: '',
    component: Cap31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap31PageRoutingModule {}
