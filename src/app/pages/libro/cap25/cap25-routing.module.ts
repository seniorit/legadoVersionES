import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap25Page } from './cap25.page';

const routes: Routes = [
  {
    path: '',
    component: Cap25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap25PageRoutingModule {}
