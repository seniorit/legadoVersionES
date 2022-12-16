import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap19Page } from './cap19.page';

const routes: Routes = [
  {
    path: '',
    component: Cap19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap19PageRoutingModule {}
