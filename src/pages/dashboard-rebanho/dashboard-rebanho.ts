import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardRebanhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-rebanho',
  templateUrl: 'dashboard-rebanho.html',
})
export class DashboardRebanhoPage {

  rebanho = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rebanho = this.navParams.get('rebanho');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardRebanhoPage');
  }

}
