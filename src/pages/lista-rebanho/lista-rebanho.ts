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
      custoPorCabeca: 800,
      pesoMedio: 10,
      porcentagemPronto: 65,
      gastoTotal: 950,
      background: 'https://i1.wp.com/cdn.comprerural.com/wp-content/uploads/2017/08/23100548/vacas-nelore-correndo.jpg?resize=640%2C346&ssl=1'
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
