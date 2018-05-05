import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MomentoVendaPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-frigorificos',
  templateUrl: 'frigorificos.html',
})
export class FrigorificosPage {


private venda: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.venda =  Object.assign({}, this.navParams.get('venda123'));
    console.log(this.venda);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrigorificosPage');
  }

}
