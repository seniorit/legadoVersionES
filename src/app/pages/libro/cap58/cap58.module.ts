import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap58PageRoutingModule } from './cap58-routing.module';
import { Cap58Page } from './cap58.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap58PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap58Page]
})
export class Cap58PageModule {}