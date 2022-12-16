import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap6Page } from './cap6.page';

const routes: Routes = [
  {
    path: '',
    component: Cap6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap6PageRoutingModule {}
