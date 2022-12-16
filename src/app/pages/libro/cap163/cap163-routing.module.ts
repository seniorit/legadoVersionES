import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap163Page } from './cap163.page';

const routes: Routes = [
  {
    path: '',
    component: Cap163Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap163PageRoutingModule {}
