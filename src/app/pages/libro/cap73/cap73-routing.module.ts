import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap73Page } from './cap73.page';

const routes: Routes = [
  {
    path: '',
    component: Cap73Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap73PageRoutingModule {}
