import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap63aPageRoutingModule } from './cap63a-routing.module';

import { Cap63aPage } from './cap63a.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap63aPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap63aPage]
})
export class Cap63aPageModule {}
