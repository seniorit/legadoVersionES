import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap168PageRoutingModule } from './cap168-routing.module';
import { Cap168Page } from './cap168.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap168PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap168Page]
})
export class Cap168PageModule {}
