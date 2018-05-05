import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaRebanhoPage } from '../pages';
import { InovaAgroApi } from '../../providers/app-providers'

@IonicPage()
@Component({
  selector: 'page-adicionar-rebanho',
  templateUrl: 'adicionar-rebanho.html',
})
export class AdicionarRebanhoPage {
 
  rebanho = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service : InovaAgroApi ) {
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarRebanhoPage');
  }

  voltar(){
    this.navCtrl.pop();
  }

  salvar() {
    console.log(this.rebanho);
    this.service.adicionarRebanho(this.rebanho);
  }
}
