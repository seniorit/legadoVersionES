import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap91Page } from './cap91.page';

const routes: Routes = [
  {
    path: '',
    component: Cap91Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap91PageRoutingModule {}
