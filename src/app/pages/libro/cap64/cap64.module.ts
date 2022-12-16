import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap64PageRoutingModule } from './cap64-routing.module';
import { Cap64Page } from './cap64.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap64PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap64Page]
})
export class Cap64PageModule {}