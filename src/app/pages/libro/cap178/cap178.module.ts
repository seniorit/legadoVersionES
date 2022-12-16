import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap178PageRoutingModule } from './cap178-routing.module';
import { Cap178Page } from './cap178.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap178PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap178Page]
})
export class Cap178PageModule {}
