import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html'
})
export class TeacherPage {

    constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {}
 // variables definidas para construir grafico tipo torta
 //labels corresponde a las variables agrupadas
  public doughnutChartLabels:string[] = ['me','myself','irene'];
  // data corresponde a los valores por cada labels
  public doughnutChartData:number[] = [1200,1500,2000];
  // type corresponde al tipo de grafico
  public doughnutChartType:string = 'doughnut';
  
  ionViewDidLoad(){
    this.loginProvider.teacherNameGet();
  }

  
}
