import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap141Page } from './cap141.page';

const routes: Routes = [
  {
    path: '',
    component: Cap141Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap141PageRoutingModule {}
