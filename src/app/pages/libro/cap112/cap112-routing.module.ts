import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap112Page } from './cap112.page';

const routes: Routes = [
  {
    path: '',
    component: Cap112Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap112PageRoutingModule {}
