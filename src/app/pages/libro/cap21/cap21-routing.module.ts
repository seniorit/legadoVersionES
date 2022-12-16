import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap21Page } from './cap21.page';

const routes: Routes = [
  {
    path: '',
    component: Cap21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap21PageRoutingModule {}
