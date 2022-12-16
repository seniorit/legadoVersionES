import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap15PageRoutingModule } from './cap15-routing.module';

import { Cap15Page } from './cap15.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap15PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap15Page]
})
export class Cap15PageModule {}
