import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectStatementPage } from '../project-statement/project-statement';
/**
 * Generated class for the NewProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-project',
  templateUrl: 'new-project.html',
})
export class NewProjectPage {

  newProjectForm : FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder) {

      this.newProjectForm = this.formBuilder.group({
        projectName: [''],
        projectConcept: ['']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProjectPage');
  }

  public goToProjectStatement() {
    this.navCtrl.push(ProjectStatementPage);
  }
}

