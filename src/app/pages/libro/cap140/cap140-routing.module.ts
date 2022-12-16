import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap140Page } from './cap140.page';

const routes: Routes = [
  {
    path: '',
    component: Cap140Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap140PageRoutingModule {}
