import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap150PageRoutingModule } from './cap150-routing.module';
import { Cap150Page } from './cap150.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap150PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap150Page]
})
export class Cap150PageModule {}
