import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardRebanhoPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-lista-rebanho',
  templateUrl: 'lista-rebanho.html',
})


export class ListaRebanhoPage {

  rebanhos = [
    {
      descricao: 'Rebanho de Nelore',
      quantidade: 10,
      idade: 8,
      tipo: 'Boi',
      raca: 'Nelore',
      custoPorCabeca: 800

    },
    {
      descricao: 'Rebanho de Wagyu',
      quantidade: 5,
      idade: 10,
      tipo: 'Vaca',
      raca: 'Wagyu',
      custoPorCabeca: 750
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  }

  abrirDashboardRebanho(rebanho) {
    const params = {
      rebanho: rebanho
    };

    

    this.navCtrl.push(DashboardRebanhoPage, params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaRebanhoPage');
  }

}
