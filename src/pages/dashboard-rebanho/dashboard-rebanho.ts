import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarPesoPage } from '../pages';
import { MomentoVendaPage } from '../pages';
import { InovaAgroApi } from '../../providers/app-providers';

@IonicPage()
@Component({
  selector: 'page-dashboard-rebanho',
  templateUrl: 'dashboard-rebanho.html',
})
export class DashboardRebanhoPage {

  private rebanho: any;
  private total: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service : InovaAgroApi) {
    //this.rebanho = Object.assign({}, this.navParams.get('rebanho'));
    this.rebanho = this.navParams.get('rebanho');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardRebanhoPage');
  }

  registrarPeso() {
    const params = {
      rebanho: this.rebanho
    };

    this.navCtrl.push(RegistrarPesoPage, params);
    this.total = this.service.total();
  }

  verMomentoVenda() {

    const params = {
      rebanho: this.rebanho
    };

    this.navCtrl.push(MomentoVendaPage, params);
  }

}
