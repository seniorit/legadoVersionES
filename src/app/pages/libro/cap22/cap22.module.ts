import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap22PageRoutingModule } from './cap22-routing.module';

import { Cap22Page } from './cap22.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap22PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap22Page]
})
export class Cap22PageModule {}
