import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'ini3',
    loadChildren: () => import('./ini3/ini3.module').then( m => m.Ini3PageModule)
  },
  {
    path: 'ini4',
    loadChildren: () => import('./ini4/ini4.module').then( m => m.Ini4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
