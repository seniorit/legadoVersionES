import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap137Page } from './cap137.page';

const routes: Routes = [
  {
    path: '',
    component: Cap137Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap137PageRoutingModule {}
