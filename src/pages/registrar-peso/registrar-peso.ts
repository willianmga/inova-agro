import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardRebanhoPage } from '../pages';



@IonicPage()
@Component({
  selector: 'page-registrar-peso',
  templateUrl: 'registrar-peso.html',
})
export class RegistrarPesoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  salvar() {

    this.navCtrl.pop();
  }

  cancelarRegistroPeso(){
    
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPesoPage');
  }

}
