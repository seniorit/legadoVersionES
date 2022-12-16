import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap173PageRoutingModule } from './cap173-routing.module';
import { Cap173Page } from './cap173.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap173PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap173Page]
})
export class Cap173PageModule {}
