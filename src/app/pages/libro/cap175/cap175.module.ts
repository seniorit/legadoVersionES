import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap175PageRoutingModule } from './cap175-routing.module';
import { Cap175Page } from './cap175.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap175PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap175Page]
})
export class Cap175PageModule {}
