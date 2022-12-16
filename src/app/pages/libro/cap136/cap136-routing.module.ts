import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap136Page } from './cap136.page';

const routes: Routes = [
  {
    path: '',
    component: Cap136Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap136PageRoutingModule {}
