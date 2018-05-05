import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InovaAgroApi } from '../../providers/app-providers';

@IonicPage()
@Component({
  selector: 'page-momento-venda',
  templateUrl: 'momento-venda.html',
})
export class MomentoVendaPage {

  vendas = [
    {
    mes: 'Maio 2018',
    selected: false,
    frigorifico: [{
      nome: 'JBS Maringá',
      valorPorArroba: 130,
      formaPagamento: 'em 30 dias',
      lucroTotal: 125000
    },
    {
      nome: 'Seronrífico',
      valorPorArroba: 135,
      formaPagamento: 'em 30 dias',
      lucroTotal: 155000
    },
    {
      nome: 'Finorífico',
      valorPorArroba: 145,
      formaPagamento: 'em 60 dias',
      lucroTotal: 111000
    }]
    },
  {
    mes: 'Junho 2018',
    selected: false,
    frigorifico: [{
      nome: 'Willianrífico',
      valorPorArroba: 135,
      formaPagamento: 'em 60 dias',
      lucroTotal: 123020
    },
    {
      nome: 'Leandrorífico',
      valorPorArroba: 120,
      formaPagamento: 'em 30 dias'
  }]
  },
    {
      mes: 'Julho 2018',
      selected: false,
      frigorifico: [{
        nome: 'Frigorífico Qualquer',
        valorPorArroba: 132,
        formaPagamento: 'em 30 dias',
        lucroTotal: 125000
      }]
  }];

  private rebanho: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service : InovaAgroApi) {
    //this.rebanho = Object.assign({}, this.navParams.get('rebanho'));
    this.rebanho = this.navParams.get('rebanho');
  }

  selectVenda(venda) {
    venda.selected = !venda.selected;
  }

  selecionarVenda(venda, frigo) {
    this.service.selecionarVenda(this.rebanho, venda, frigo);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MomentoVendaPage');
  }

}
