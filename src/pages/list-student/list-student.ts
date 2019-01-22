import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-list-student',
  templateUrl: 'list-student.html'
})
export class ListStudentPage {

  constructor(public navCtrl: NavController, public loginProvider:LoginProvider) {
  }
  ionViewDidLoad(){
    this.loginProvider.studentNameGet();
  }
}
