import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap46PageRoutingModule } from './cap46-routing.module';

import { Cap46Page } from './cap46.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap46PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap46Page]
})
export class Cap46PageModule {}
