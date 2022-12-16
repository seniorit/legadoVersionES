import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap60PageRoutingModule } from './cap60-routing.module';
import { Cap60Page } from './cap60.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap60PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap60Page]
})
export class Cap60PageModule {}