import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap62PageRoutingModule } from './cap62-routing.module';

import { Cap62Page } from './cap62.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap62PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap62Page]
})
export class Cap62PageModule {}
