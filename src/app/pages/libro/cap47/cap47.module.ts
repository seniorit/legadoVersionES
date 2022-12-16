import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap47PageRoutingModule } from './cap47-routing.module';

import { Cap47Page } from './cap47.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap47PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap47Page]
})
export class Cap47PageModule {}
