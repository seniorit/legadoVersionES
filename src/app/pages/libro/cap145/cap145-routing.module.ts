import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap145Page } from './cap145.page';

const routes: Routes = [
  {
    path: '',
    component: Cap145Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap145PageRoutingModule {}
