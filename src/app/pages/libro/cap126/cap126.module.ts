import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap126PageRoutingModule } from './cap126-routing.module';

import { Cap126Page } from './cap126.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap126PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap126Page]
})
export class Cap126PageModule {}
