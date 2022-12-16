import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { PcreditoComponent } from 'src/app/components/pcredito/pcredito.component';
import { PmenuComponent } from 'src/app/components/pmenu/pmenu.component';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: '/tabs/portada', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'credito', component: PcreditoComponent },
      { path: 'menu', component: PmenuComponent },
      {
        path: 'portada',
        loadChildren: () => import('../portada/portada.module').then(m => m.PortadaPageModule)
      },
      {
        path: 'libro',
        loadChildren: () => import('../libro/libro.module').then(m => m.LibroPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
