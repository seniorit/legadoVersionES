import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap63Page } from './cap63.page';

const routes: Routes = [
  {
    path: '',
    component: Cap63Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap63PageRoutingModule {}
