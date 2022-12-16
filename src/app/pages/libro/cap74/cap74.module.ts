import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap74PageRoutingModule } from './cap74-routing.module';
import { Cap74Page } from './cap74.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap74PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap74Page]
})
export class Cap74PageModule {}