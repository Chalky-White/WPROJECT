import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';

/**
 * Generated class for the PreHomeSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-home-slider',
  templateUrl: 'pre-home-slider.html',
})
export class PreHomeSliderPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    )
     {}
  public goToHome() {
    this.navCtrl.push(HomePage);
  }

    slides = [
      {
        title: "Welcome in <br> Project RailRoad !",
        description: "The best way to help you in project conception, step by step",
        image: "../../assets/imgs/ProjectRR3.png",
      },
      {
        title: "How it works ?",
        image: "../../assets/imgs/ProjectRR3.png",
        description: "<b>Projet RR</b> purposes you two axes of development",
      },
      {
        title: "What is Ionic Cloud?",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/img/ica-slidebox-img-3.png",
      }
    ];
  }
