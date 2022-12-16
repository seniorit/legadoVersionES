import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap183PageRoutingModule } from './cap183-routing.module';

import { Cap183Page } from './cap183.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap183PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap183Page]
})
export class Cap183PageModule {}
