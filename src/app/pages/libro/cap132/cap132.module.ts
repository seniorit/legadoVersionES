import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap132PageRoutingModule } from './cap132-routing.module';

import { Cap132Page } from './cap132.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap132PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap132Page]
})
export class Cap132PageModule {}
