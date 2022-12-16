import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap152Page } from './cap152.page';

const routes: Routes = [
  {
    path: '',
    component: Cap152Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap152PageRoutingModule {}
