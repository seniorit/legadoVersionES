import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap114Page } from './cap114.page';

const routes: Routes = [
  {
    path: '',
    component: Cap114Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap114PageRoutingModule {}
