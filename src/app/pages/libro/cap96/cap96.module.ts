import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap96PageRoutingModule } from './cap96-routing.module';

import { Cap96Page } from './cap96.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap96PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap96Page]
})
export class Cap96PageModule {}
