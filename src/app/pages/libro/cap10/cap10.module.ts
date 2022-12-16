import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap10PageRoutingModule } from './cap10-routing.module';

import { Cap10Page } from './cap10.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap10PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap10Page]
})
export class Cap10PageModule {}
