import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap85PageRoutingModule } from './cap85-routing.module';
import { Cap85Page } from './cap85.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap85PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap85Page]
})
export class Cap85PageModule {}