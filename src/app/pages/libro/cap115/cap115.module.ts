import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap115PageRoutingModule } from './cap115-routing.module';

import { Cap115Page } from './cap115.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap115PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap115Page]
})
export class Cap115PageModule {}
