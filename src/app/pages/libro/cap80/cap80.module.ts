import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap80PageRoutingModule } from './cap80-routing.module';
import { Cap80Page } from './cap80.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap80PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap80Page]
})
export class Cap80PageModule {}