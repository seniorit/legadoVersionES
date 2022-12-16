import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap138PageRoutingModule } from './cap138-routing.module';

import { Cap138Page } from './cap138.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap138PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap138Page]
})
export class Cap138PageModule {}
