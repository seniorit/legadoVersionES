import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap79PageRoutingModule } from './cap79-routing.module';
import { Cap79Page } from './cap79.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap79PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap79Page]
})
export class Cap79PageModule {}