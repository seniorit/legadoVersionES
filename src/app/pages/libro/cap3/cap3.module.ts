import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap3PageRoutingModule } from './cap3-routing.module';

import { Cap3Page } from './cap3.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap3PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap3Page]
})
export class Cap3PageModule {}
