import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap14PageRoutingModule } from './cap14-routing.module';

import { Cap14Page } from './cap14.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap14PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap14Page]
})
export class Cap14PageModule {}
