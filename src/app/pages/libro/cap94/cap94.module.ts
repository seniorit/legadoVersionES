import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap94PageRoutingModule } from './cap94-routing.module';

import { Cap94Page } from './cap94.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap94PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap94Page]
})
export class Cap94PageModule {}
