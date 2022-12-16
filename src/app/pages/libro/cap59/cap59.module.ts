import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap59PageRoutingModule } from './cap59-routing.module';
import { Cap59Page } from './cap59.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap59PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap59Page]
})
export class Cap59PageModule {}