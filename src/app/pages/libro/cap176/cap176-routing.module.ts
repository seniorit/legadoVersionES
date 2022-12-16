import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap176Page } from './cap176.page';

const routes: Routes = [
  {
    path: '',
    component: Cap176Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap176PageRoutingModule {}
