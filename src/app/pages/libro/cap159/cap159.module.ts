import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap159PageRoutingModule } from './cap159-routing.module';
import { Cap159Page } from './cap159.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap159PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap159Page]
})
export class Cap159PageModule {}
