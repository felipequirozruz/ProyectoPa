import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecoveryPassPage } from '../recovery-pass/recovery-pass';
import { LoginProvider } from '../../providers/login/login';
import { MenuPage } from '../../pages/menu/menu';
import { AlertController } from 'ionic-angular';
'@angular/common';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  rut:string;
  password:string;
 
  constructor(
    public navCtrl: NavController, 
    public loginProvider:LoginProvider,
    public alertCtrl: AlertController) {
  }
  goToRecoveryPass(params){
    if (!params) params = {};
    this.navCtrl.push(RecoveryPassPage);
  }
  login(){
  /* condicion para determinar el largo ingresado por rut que este valor puede variar entre 9 y 10 y el de la password como un minimo de 5 caracteres. En caso de no cumplir se despliega un mensaje solicitando que ingrese rut y password validos y en caso de que si cumplan inicia sesion.
  */
    if((this.rut.length<=8 && this.rut.length>=10)  || (this.password.length<=5 ))
    {
      alert("Porfavor ingrese un rut valido y una password valida");
    }
    else{
      console.log(this.loginProvider);
      console.log(this.password);
      this.loginProvider.loginUser(     this.rut,this.password).subscribe((data:any)=>{
      console.log(data);
      this.loginProvider.apiKey = data.apiKey;
      this.loginProvider.rut = data.rut; 
      this.loginProvider.rol = data.role;
      this.navCtrl.setRoot(MenuPage);
    });
  }
  }



}
