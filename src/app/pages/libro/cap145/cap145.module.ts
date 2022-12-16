import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap145PageRoutingModule } from './cap145-routing.module';

import { Cap145Page } from './cap145.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap145PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap145Page]
})
export class Cap145PageModule {}
