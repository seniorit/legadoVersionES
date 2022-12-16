import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap148Page } from './cap148.page';

const routes: Routes = [
  {
    path: '',
    component: Cap148Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap148PageRoutingModule {}
