import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap53PageRoutingModule } from './cap53-routing.module';
import { Cap53Page } from './cap53.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap53PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap53Page]
})
export class Cap53PageModule {}