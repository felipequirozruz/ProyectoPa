import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-recovery-pass',
  templateUrl: 'recovery-pass.html'
})
export class RecoveryPassPage {

  constructor(public navCtrl: NavController, public loginProvider:LoginProvider) {
  }

  forgotpass(){
    this.loginProvider.forgotpass().subscribe();  
  }
}
