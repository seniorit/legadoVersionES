import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap34Page } from './cap34.page';

const routes: Routes = [
  {
    path: '',
    component: Cap34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap34PageRoutingModule {}
