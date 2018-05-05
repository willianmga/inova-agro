import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarPesoPage } from './registrar-peso';

@NgModule({
  declarations: [
    RegistrarPesoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarPesoPage),
  ],
})
export class RegistrarPesoPageModule {}
