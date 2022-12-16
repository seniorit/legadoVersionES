import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap136PageRoutingModule } from './cap136-routing.module';

import { Cap136Page } from './cap136.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap136PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap136Page]
})
export class Cap136PageModule {}
