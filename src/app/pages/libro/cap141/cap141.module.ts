import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap141PageRoutingModule } from './cap141-routing.module';

import { Cap141Page } from './cap141.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap141PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap141Page]
})
export class Cap141PageModule {}
