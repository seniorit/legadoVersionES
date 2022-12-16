import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap63aPage } from './cap63a.page';

const routes: Routes = [
  {
    path: '',
    component: Cap63aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap63aPageRoutingModule {}
