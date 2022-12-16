import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap61PageRoutingModule } from './cap61-routing.module';
import { Cap61Page } from './cap61.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap61PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap61Page]
})
export class Cap61PageModule {}