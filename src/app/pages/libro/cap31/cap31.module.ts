import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap31PageRoutingModule } from './cap31-routing.module';

import { Cap31Page } from './cap31.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap31PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap31Page]
})
export class Cap31PageModule {}
