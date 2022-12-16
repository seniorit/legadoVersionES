import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap156PageRoutingModule } from './cap156-routing.module';
import { Cap156Page } from './cap156.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap156PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap156Page]
})
export class Cap156PageModule {}
