import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap9Page } from './cap9.page';

const routes: Routes = [
  {
    path: '',
    component: Cap9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap9PageRoutingModule {}
