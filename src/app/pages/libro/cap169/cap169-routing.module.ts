import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap169Page } from './cap169.page';

const routes: Routes = [
  {
    path: '',
    component: Cap169Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap169PageRoutingModule {}
