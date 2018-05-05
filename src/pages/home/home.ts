import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaRebanhoPage, AddIncomePage, AddOutcomePage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navController: NavController) {

  }

  abrirListaRebanho() {
    this.navController.push(ListaRebanhoPage);
  }

  addIncome() {
    this.navController.push(AddIncomePage);
  }

  addOutcome() {
    this.navController.push(AddOutcomePage);
  }

}
