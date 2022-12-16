import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap101Page } from './cap101.page';

const routes: Routes = [
  {
    path: '',
    component: Cap101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap101PageRoutingModule {}
