import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap177PageRoutingModule } from './cap177-routing.module';
import { Cap177Page } from './cap177.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap177PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap177Page]
})
export class Cap177PageModule {}
