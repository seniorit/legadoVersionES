import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap43Page } from './cap43.page';

const routes: Routes = [
  {
    path: '',
    component: Cap43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap43PageRoutingModule {}
