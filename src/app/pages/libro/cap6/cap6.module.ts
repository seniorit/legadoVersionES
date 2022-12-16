import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap6PageRoutingModule } from './cap6-routing.module';

import { Cap6Page } from './cap6.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap6PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap6Page]
})
export class Cap6PageModule {}
