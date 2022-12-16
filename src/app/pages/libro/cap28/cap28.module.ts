import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap28PageRoutingModule } from './cap28-routing.module';

import { Cap28Page } from './cap28.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap28PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap28Page]
})
export class Cap28PageModule {}
