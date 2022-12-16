import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap105PageRoutingModule } from './cap105-routing.module';

import { Cap105Page } from './cap105.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap105PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap105Page]
})
export class Cap105PageModule {}
