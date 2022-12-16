import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap101PageRoutingModule } from './cap101-routing.module';

import { Cap101Page } from './cap101.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap101PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap101Page]
})
export class Cap101PageModule {}
