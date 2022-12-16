import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap71PageRoutingModule } from './cap71-routing.module';
import { Cap71Page } from './cap71.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap71PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap71Page]
})
export class Cap71PageModule {}