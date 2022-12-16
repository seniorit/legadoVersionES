import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap155PageRoutingModule } from './cap155-routing.module';
import { Cap155Page } from './cap155.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap155PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap155Page]
})
export class Cap155PageModule {}
