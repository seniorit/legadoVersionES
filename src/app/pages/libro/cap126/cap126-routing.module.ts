import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap126Page } from './cap126.page';

const routes: Routes = [
  {
    path: '',
    component: Cap126Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap126PageRoutingModule {}
