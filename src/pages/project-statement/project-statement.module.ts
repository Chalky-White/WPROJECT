import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectStatementPage } from './project-statement';

@NgModule({
  declarations: [
    ProjectStatementPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectStatementPage),
  ],
})
export class ProjectStatementPageModule {}
