import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap18PageRoutingModule } from './cap18-routing.module';

import { Cap18Page } from './cap18.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap18PageRoutingModule, 
    ComponentsModule,
  ],
  declarations: [Cap18Page]
})
export class Cap18PageModule {}
