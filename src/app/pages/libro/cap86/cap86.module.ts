import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap86PageRoutingModule } from './cap86-routing.module';

import { Cap86Page } from './cap86.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap86PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap86Page]
})
export class Cap86PageModule {}
