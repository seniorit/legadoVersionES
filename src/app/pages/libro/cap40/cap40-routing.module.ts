import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap40Page } from './cap40.page';

const routes: Routes = [
  {
    path: '',
    component: Cap40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap40PageRoutingModule {}
