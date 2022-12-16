import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap167Page } from './cap167.page';

const routes: Routes = [
  {
    path: '',
    component: Cap167Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap167PageRoutingModule {}
