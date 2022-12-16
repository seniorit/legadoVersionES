import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cap160PageRoutingModule } from './cap160-routing.module';
import { Cap160Page } from './cap160.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap160PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap160Page]
})
export class Cap160PageModule {}
