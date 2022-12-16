import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap72Page } from './cap72.page';

const routes: Routes = [
  {
    path: '',
    component: Cap72Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap72PageRoutingModule {}
