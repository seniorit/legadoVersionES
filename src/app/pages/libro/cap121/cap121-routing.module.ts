import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap121Page } from './cap121.page';

const routes: Routes = [
  {
    path: '',
    component: Cap121Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cap121PageRoutingModule {}
