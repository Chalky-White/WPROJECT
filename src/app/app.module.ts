import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConditionsPage } from '../pages/conditions/conditions';
import { ConditionsPageModule } from '../pages/conditions/conditions.module';
import { NewProjectPageModule } from '../pages/new-project/new-project.module';
import { NewProjectPage } from '../pages/new-project/new-project';
import { ProjectStatementPage } from '../pages/project-statement/project-statement';
import { ProjectStatementPageModule } from '../pages/project-statement/project-statement.module';
import { PreHomeSliderPage } from '../pages/pre-home-slider/pre-home-slider';
import { PreHomeSliderPageModule } from '../pages/pre-home-slider/pre-home-slider.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ConditionsPageModule,
    NewProjectPageModule,
    ProjectStatementPageModule,
    PreHomeSliderPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConditionsPage,
    NewProjectPage,
    ProjectStatementPage,
    PreHomeSliderPage
  ],
  providers: [
    StatusBar,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
