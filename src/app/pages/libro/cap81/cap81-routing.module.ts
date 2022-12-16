import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap81Page } from './cap81.page';

const routes: Routes = [
  {
    path: '',
    component: Cap81Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap81PageRoutingModule {}
