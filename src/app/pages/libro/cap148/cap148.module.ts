import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap148PageRoutingModule } from './cap148-routing.module';

import { Cap148Page } from './cap148.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap148PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap148Page]
})
export class Cap148PageModule {}
