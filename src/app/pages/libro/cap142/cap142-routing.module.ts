import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap142Page } from './cap142.page';

const routes: Routes = [
  {
    path: '',
    component: Cap142Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap142PageRoutingModule {}
