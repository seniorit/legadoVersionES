import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap33PageRoutingModule } from './cap33-routing.module';

import { Cap33Page } from './cap33.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap33PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap33Page]
})
export class Cap33PageModule {}
