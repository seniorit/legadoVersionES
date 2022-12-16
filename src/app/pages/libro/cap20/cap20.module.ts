import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap20PageRoutingModule } from './cap20-routing.module';

import { Cap20Page } from './cap20.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap20PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap20Page]
})
export class Cap20PageModule {}
