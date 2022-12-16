import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap55Page } from './cap55.page';

const routes: Routes = [
  {
    path: '',
    component: Cap55Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap55PageRoutingModule {}
