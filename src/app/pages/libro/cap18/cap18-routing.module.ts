import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap18Page } from './cap18.page';

const routes: Routes = [
  {
    path: '',
    component: Cap18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap18PageRoutingModule {}
