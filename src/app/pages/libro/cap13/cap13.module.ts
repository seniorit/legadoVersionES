import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap13PageRoutingModule } from './cap13-routing.module';

import { Cap13Page } from './cap13.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap13PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap13Page]
})
export class Cap13PageModule {}
