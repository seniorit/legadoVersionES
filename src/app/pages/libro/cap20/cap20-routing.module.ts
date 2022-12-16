import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap20Page } from './cap20.page';

const routes: Routes = [
  {
    path: '',
    component: Cap20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap20PageRoutingModule {}
