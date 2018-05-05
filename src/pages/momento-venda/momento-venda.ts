import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FrigorificosPage } from '../pages'

@IonicPage()
@Component({
  selector: 'page-momento-venda',
  templateUrl: 'momento-venda.html',
})
export class MomentoVendaPage {

  vendas = [{
    mes: 'Maio 2018',
    preco: 145,
    raca: "Nelore",
    frigorifico: [{
      nome: "Frangorífico",
      valorPorArroba: 130,
      formaPagamento: 'em 30 dias'
    },
    {
      nome: "Seronrífico",
      valorPorArroba: 135,
      formaPagamento: 'em 30 dias'
    },
    {
      nome: "Finorífico",
      valorPorArroba: 145,
      formaPagamento: 'em 60 dias'
    }]
    },
  {
    mes: 'Junho 2018',
    preco: 135,
    raca: "Wagyu",
    frigorifico: [{
      nome: 'Willianrífico',
      valorPorArroba: 135,
      formaPagamento: 'em 60 dias'
    },
    {
      nome: 'Leandrorífico',
      valorPorArroba: 120,
      formaPagamento: 'em 30 dias'
  }]
  },
  
    {
      mes: 'Julho 2018',
      preco: 132,
      raca: "Raça Qualquer",
      frigorifico: [{
        nome: 'Frigorífico Qualquer',
        valorPorArroba: 132,
        formaPagamento: 'em 30 dias'
      }]
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
    
  abrirFrigorificos(venda) {
    
    const params = {
      venda123: venda
    }

    this.navCtrl.push(FrigorificosPage, params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MomentoVendaPage');
  }

}
