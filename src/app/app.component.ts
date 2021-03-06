import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StudentPage } from '../pages/student/student';
import { ListStudentPage } from '../pages/list-student/list-student';

import { TeacherPage } from '../pages/teacher/teacher';
import { ListTeacherPage } from '../pages/list-teacher/list-teacher';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToStudent(params){
    if (!params) params = {};
    this.navCtrl.setRoot(StudentPage);
  }goToListStudent(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListStudentPage);
  }goToTeacher(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TeacherPage);
  }goToListTeacher(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListTeacherPage);
  }
}
