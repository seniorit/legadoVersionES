import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap118PageRoutingModule } from './cap118-routing.module';

import { Cap118Page } from './cap118.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap118PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap118Page]
})
export class Cap118PageModule {}
