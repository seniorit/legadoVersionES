import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap138Page } from './cap138.page';

const routes: Routes = [
  {
    path: '',
    component: Cap138Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap138PageRoutingModule {}
