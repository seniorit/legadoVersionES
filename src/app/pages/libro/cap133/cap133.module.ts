import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap133PageRoutingModule } from './cap133-routing.module';

import { Cap133Page } from './cap133.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap133PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap133Page]
})
export class Cap133PageModule {}
