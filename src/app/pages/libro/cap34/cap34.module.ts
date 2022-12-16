import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap34PageRoutingModule } from './cap34-routing.module';

import { Cap34Page } from './cap34.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap34PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap34Page]
})
export class Cap34PageModule {}
