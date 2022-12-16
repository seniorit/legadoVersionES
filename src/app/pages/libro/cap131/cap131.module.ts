import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap131PageRoutingModule } from './cap131-routing.module';

import { Cap131Page } from './cap131.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap131PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap131Page]
})
export class Cap131PageModule {}
