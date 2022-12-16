import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap33Page } from './cap33.page';

const routes: Routes = [
  {
    path: '',
    component: Cap33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap33PageRoutingModule {}
