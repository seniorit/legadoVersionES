import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap135PageRoutingModule } from './cap135-routing.module';

import { Cap135Page } from './cap135.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap135PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap135Page]
})
export class Cap135PageModule {}
