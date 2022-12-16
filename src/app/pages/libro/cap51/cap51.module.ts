import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap51PageRoutingModule } from './cap51-routing.module';
import { Cap51Page } from './cap51.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap51PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap51Page]
})
export class Cap51PageModule {}