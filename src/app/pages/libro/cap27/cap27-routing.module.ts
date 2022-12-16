import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap27Page } from './cap27.page';

const routes: Routes = [
  {
    path: '',
    component: Cap27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap27PageRoutingModule {}
