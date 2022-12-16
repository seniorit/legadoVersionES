import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap11Page } from './cap11.page';

const routes: Routes = [
  {
    path: '',
    component: Cap11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap11PageRoutingModule {}
