import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap9PageRoutingModule } from './cap9-routing.module';

import { Cap9Page } from './cap9.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap9PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap9Page]
})
export class Cap9PageModule {}
