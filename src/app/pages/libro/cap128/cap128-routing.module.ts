import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap128Page } from './cap128.page';

const routes: Routes = [
  {
    path: '',
    component: Cap128Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap128PageRoutingModule {}
