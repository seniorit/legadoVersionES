import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap77Page } from './cap77.page';

const routes: Routes = [
  {
    path: '',
    component: Cap77Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap77PageRoutingModule {}
