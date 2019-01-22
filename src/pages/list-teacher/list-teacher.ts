import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-list-teacher',
  templateUrl: 'list-teacher.html'
})
export class ListTeacherPage {

  constructor(public navCtrl: NavController, public loginProvider:LoginProvider) {
  }
  ionViewDidLoad(){
    this.loginProvider.teacherNameGet();
  }
}
