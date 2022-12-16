import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap50PageRoutingModule } from './cap50-routing.module';
import { Cap50Page } from './cap50.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap50PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap50Page]
})
export class Cap50PageModule {}