import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NavLifeCicle} from "../../utils/ionic/nav/nav-life-cicle";
import {Carro} from "../../models/carro";

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage implements NavLifeCicle {
  public carro: Carro;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.carro = this.navParams.get('carroSelecionado');
  }

  ionViewDidLoad() {
  }

}
