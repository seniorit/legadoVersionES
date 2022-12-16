import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap108Page } from './cap108.page';

const routes: Routes = [
  {
    path: '',
    component: Cap108Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap108PageRoutingModule {}
