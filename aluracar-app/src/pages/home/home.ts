import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {Carro} from "../../models/carro";
import {CarrosServiceProvider} from "../../providers/carros-service/carros-service";
import {HttpErrorResponse} from "@angular/common/http";
import {NavLifeCicle} from "../../utils/ionic/nav/nav-life-cicle";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifeCicle {
  public carros: Carro[];

  constructor(public navCtrl: NavController,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              private _carrosService: CarrosServiceProvider) {
  }

  ionViewDidLoad() {
    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento dos carros...'
    });
    loading.present();
    this._carrosService.listar()
      .subscribe(
        (carros) => {
          this.carros = carros;
          loading.dismiss();
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          loading.dismiss();
          this._alertCtrl.create({
            title: 'Falha na conexão',
            subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde',
            buttons: [
              { text: 'Ok'}
            ]
          }).present();
        }
      )
  }

}
