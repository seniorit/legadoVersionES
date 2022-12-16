import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap23PageRoutingModule } from './cap23-routing.module';

import { Cap23Page } from './cap23.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap23PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap23Page]
})
export class Cap23PageModule {}
