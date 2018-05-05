import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardRebanhoPage, AdicionarRebanhoPage } from '../pages';
import { InovaAgroApi } from '../../providers/app-providers'

@IonicPage()
@Component({
  selector: 'page-lista-rebanho',
  templateUrl: 'lista-rebanho.html',
})


export class ListaRebanhoPage {

  private rebanhos: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service : InovaAgroApi) { 

  }

  ionViewWillEnter() {
    this.rebanhos = this.service.trazerTodosRebanhos();
  }

  abrirDashboardRebanho(rebanho) {
    const params = {
      rebanho: rebanho
    };
    this.navCtrl.push(DashboardRebanhoPage, params);
  }


  addRebanho(){
    this.navCtrl.push(AdicionarRebanhoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaRebanhoPage');
  }

}
