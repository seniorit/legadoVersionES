import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap174PageRoutingModule } from './cap174-routing.module';
import { Cap174Page } from './cap174.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap174PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap174Page]
})
export class Cap174PageModule {}
