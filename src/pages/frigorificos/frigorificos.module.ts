import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrigorificosPage } from './frigorificos';

@NgModule({
  declarations: [
    FrigorificosPage,
  ],
  imports: [
    IonicPageModule.forChild(FrigorificosPage),
  ],
})
export class FrigorificosPageModule {}
