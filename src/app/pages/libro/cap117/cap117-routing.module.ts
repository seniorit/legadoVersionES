import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap117Page } from './cap117.page';

const routes: Routes = [
  {
    path: '',
    component: Cap117Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap117PageRoutingModule {}
