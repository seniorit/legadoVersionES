import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap103Page } from './cap103.page';

const routes: Routes = [
  {
    path: '',
    component: Cap103Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap103PageRoutingModule {}
