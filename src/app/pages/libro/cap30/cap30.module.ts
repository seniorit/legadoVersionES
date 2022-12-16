import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap30PageRoutingModule } from './cap30-routing.module';

import { Cap30Page } from './cap30.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap30PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap30Page]
})
export class Cap30PageModule {}
