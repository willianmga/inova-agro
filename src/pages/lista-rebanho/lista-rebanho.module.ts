import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRebanhoPage } from './lista-rebanho';

@NgModule({
  declarations: [
    ListaRebanhoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRebanhoPage),
  ],
})
export class ListaRebanhoPageModule {}
