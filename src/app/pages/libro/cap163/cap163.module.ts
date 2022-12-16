import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap163PageRoutingModule } from './cap163-routing.module';
import { Cap163Page } from './cap163.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap163PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap163Page]
})
export class Cap163PageModule {}
