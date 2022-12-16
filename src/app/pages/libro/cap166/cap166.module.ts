import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap166PageRoutingModule } from './cap166-routing.module';
import { Cap166Page } from './cap166.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap166PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap166Page]
})
export class Cap166PageModule {}
