import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap38PageRoutingModule } from './cap38-routing.module';

import { Cap38Page } from './cap38.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap38PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap38Page]
})
export class Cap38PageModule {}
