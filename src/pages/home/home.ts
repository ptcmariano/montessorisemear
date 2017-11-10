import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public iab: InAppBrowser) {

  }

  ionViewDidLoad() {
    this.iab.create('http://sistema.escolamontessorisemear.com.br/','_self','location=no');
  }
}
