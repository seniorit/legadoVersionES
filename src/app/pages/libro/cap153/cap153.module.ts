import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap153PageRoutingModule } from './cap153-routing.module';
import { Cap153Page } from './cap153.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap153PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap153Page]
})
export class Cap153PageModule {}
