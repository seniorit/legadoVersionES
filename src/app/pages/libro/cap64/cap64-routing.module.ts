import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap64Page } from './cap64.page';

const routes: Routes = [
  {
    path: '',
    component: Cap64Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap64PageRoutingModule {}
