import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap86Page } from './cap86.page';

const routes: Routes = [
  {
    path: '',
    component: Cap86Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap86PageRoutingModule {}
