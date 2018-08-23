import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PopoverController } from 'ionic-angular';
// import { MyPopOverPage } from './my-pop-over';

/**
 * Generated class for the ConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conditions',
  templateUrl: 'conditions.html',
})
export class ConditionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConditionsPage');
  }

  // presentPopover() {
  //   const popover = this.popoverCtrl.create(MyPopOverPage);
  //   popover.present();
  // }

}
