import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap17PageRoutingModule } from './cap17-routing.module';

import { Cap17Page } from './cap17.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap17PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap17Page]
})
export class Cap17PageModule {}
