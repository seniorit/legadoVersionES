import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap96Page } from './cap96.page';

const routes: Routes = [
  {
    path: '',
    component: Cap96Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap96PageRoutingModule {}
