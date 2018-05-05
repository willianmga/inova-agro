import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardRebanhoPage } from '../pages';
import { InovaAgroApi } from '../../providers/app-providers'



@IonicPage()
@Component({
  selector: 'page-registrar-peso',
  templateUrl: 'registrar-peso.html',
})
export class RegistrarPesoPage {

  private rebanho: any;
  private peso: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:InovaAgroApi) {
    this.rebanho = Object.assign({}, this.navParams.get('rebanho')) ;
    this.peso = {};
  }

  salvar() {
    console.log(this.peso);
    
    this.service.adicionarPeso(this.rebanho,this.peso);
    this.navCtrl.pop();
  }

  cancelarRegistroPeso(){
    
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPesoPage');
  }

}
