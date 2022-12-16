import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap55PageRoutingModule } from './cap55-routing.module';
import { Cap55Page } from './cap55.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap55PageRoutingModule,
    ComponentsModule

  ],
  declarations: [Cap55Page]
})
export class Cap55PageModule {}