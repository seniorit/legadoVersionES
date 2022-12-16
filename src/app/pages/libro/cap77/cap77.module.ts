import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap77PageRoutingModule } from './cap77-routing.module';
import { Cap77Page } from './cap77.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap77PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap77Page]
})
export class Cap77PageModule {}