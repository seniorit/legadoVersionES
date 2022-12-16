import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap72PageRoutingModule } from './cap72-routing.module';
import { Cap72Page } from './cap72.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap72PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap72Page]
})
export class Cap72PageModule {}