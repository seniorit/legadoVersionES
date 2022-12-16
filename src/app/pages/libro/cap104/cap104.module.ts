import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap104PageRoutingModule } from './cap104-routing.module';

import { Cap104Page } from './cap104.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap104PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap104Page]
})
export class Cap104PageModule {}
