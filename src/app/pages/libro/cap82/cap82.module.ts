import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap82PageRoutingModule } from './cap82-routing.module';
import { Cap82Page } from './cap82.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap82PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap82Page]
})
export class Cap82PageModule {}