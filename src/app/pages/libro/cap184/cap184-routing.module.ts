import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap184Page } from './cap184.page';

const routes: Routes = [
  {
    path: '',
    component: Cap184Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap184PageRoutingModule {}
