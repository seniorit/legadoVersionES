import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap19PageRoutingModule } from './cap19-routing.module';

import { Cap19Page } from './cap19.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap19PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap19Page]
})
export class Cap19PageModule {}
