import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ConditionsPage } from '../conditions/conditions'
import { NewProjectPage } from '../new-project/new-project';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {

  }

  public goToConditions() {
    this.navCtrl.push(ConditionsPage);
  }

  public goToNewProjectPage() {
    console.log("toto");
    this.navCtrl.push(NewProjectPage);
    this.presentLoading();
  }
  
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
}

