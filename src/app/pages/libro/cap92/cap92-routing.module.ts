import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap92Page } from './cap92.page';

const routes: Routes = [
  {
    path: '',
    component: Cap92Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap92PageRoutingModule {}
