import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap184PageRoutingModule } from './cap184-routing.module';

import { Cap184Page } from './cap184.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap184PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap184Page]
})
export class Cap184PageModule {}
