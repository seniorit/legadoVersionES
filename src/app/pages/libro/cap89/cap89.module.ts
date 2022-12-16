import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap89PageRoutingModule } from './cap89-routing.module';

import { Cap89Page } from './cap89.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap89PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap89Page]
})
export class Cap89PageModule {}
