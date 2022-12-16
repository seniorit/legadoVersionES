import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap99PageRoutingModule } from './cap99-routing.module';

import { Cap99Page } from './cap99.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap99PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap99Page]
})
export class Cap99PageModule {}
