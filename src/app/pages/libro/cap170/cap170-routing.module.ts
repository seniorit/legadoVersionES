import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap170Page } from './cap170.page';

const routes: Routes = [
  {
    path: '',
    component: Cap170Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap170PageRoutingModule {}
