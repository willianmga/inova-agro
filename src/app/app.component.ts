import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, IncomesPage, OutcomesPage, LoginPage, ListaRebanhoPage, RegistrarPesoPage} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  appName = "Inova Agro";
  rootPage: any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openHome() {
    this.nav.popToRoot();
  }

  openIncomes() {
    this.nav.push(IncomesPage);
  }

  openOutcomes() {
    this.nav.push(OutcomesPage);
  }

  exitApplication() {
    this.nav.push(LoginPage, { action: 'exit' });
  }

}