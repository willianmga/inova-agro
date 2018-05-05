import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarRebanhoPage } from './adicionar-rebanho';

@NgModule({
  declarations: [
    AdicionarRebanhoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarRebanhoPage),
  ],
})
export class AdicionarRebanhoPageModule {}
