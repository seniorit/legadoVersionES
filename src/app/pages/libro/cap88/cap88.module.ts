import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap88PageRoutingModule } from './cap88-routing.module';

import { Cap88Page } from './cap88.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap88PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap88Page]
})
export class Cap88PageModule {}
