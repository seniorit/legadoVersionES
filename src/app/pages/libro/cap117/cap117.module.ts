import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap117PageRoutingModule } from './cap117-routing.module';

import { Cap117Page } from './cap117.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap117PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap117Page]
})
export class Cap117PageModule {}
