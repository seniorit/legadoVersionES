import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap57PageRoutingModule } from './cap57-routing.module';
import { Cap57Page } from './cap57.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap57PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap57Page]
})
export class Cap57PageModule {}