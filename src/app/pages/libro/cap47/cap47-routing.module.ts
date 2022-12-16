import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap47Page } from './cap47.page';

const routes: Routes = [
  {
    path: '',
    component: Cap47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap47PageRoutingModule {}
