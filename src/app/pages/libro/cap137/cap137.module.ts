import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap137PageRoutingModule } from './cap137-routing.module';

import { Cap137Page } from './cap137.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap137PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap137Page]
})
export class Cap137PageModule {}
