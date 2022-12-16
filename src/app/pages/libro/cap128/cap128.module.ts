import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap128PageRoutingModule } from './cap128-routing.module';

import { Cap128Page } from './cap128.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap128PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap128Page]
})
export class Cap128PageModule {}
