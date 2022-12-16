import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap63PageRoutingModule } from './cap63-routing.module';
import { Cap63Page } from './cap63.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap63PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap63Page]
})
export class Cap63PageModule {}