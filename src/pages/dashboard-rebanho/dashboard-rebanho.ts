import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MomentoVendaPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-dashboard-rebanho',
  templateUrl: 'dashboard-rebanho.html',
})
export class DashboardRebanhoPage {

  private rebanho: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rebanho = Object.assign({}, this.navParams.get('rebanho'));
  }

  abrirMomentoVenda(){
    this.navCtrl.push(MomentoVendaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardRebanhoPage');
  }

  registrarPeso() {

  }

  verMomentoVenda() {

  }

}
