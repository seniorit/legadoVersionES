import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap12PageRoutingModule } from './cap12-routing.module';

import { Cap12Page } from './cap12.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap12PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap12Page]
})
export class Cap12PageModule {}
