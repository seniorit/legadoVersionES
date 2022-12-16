import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap159Page } from './cap159.page';

const routes: Routes = [
  {
    path: '',
    component: Cap159Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap159PageRoutingModule {}
