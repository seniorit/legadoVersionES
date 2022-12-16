import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap56PageRoutingModule } from './cap56-routing.module';
import { Cap56Page } from './cap56.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap56PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap56Page]
})
export class Cap56PageModule {}