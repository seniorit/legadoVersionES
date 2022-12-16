import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap164PageRoutingModule } from './cap164-routing.module';
import { Cap164Page } from './cap164.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap164PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap164Page]
})
export class Cap164PageModule {}
