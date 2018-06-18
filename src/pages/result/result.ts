import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  name: String;
  time: String;
  img: String;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.name
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
