import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TeacherPage } from '../../pages/teacher/teacher';
import { ListTeacherPage } from '../../pages/list-teacher/list-teacher';
import { StudentPage } from '../../pages/student/student';
import { ListStudentPage } from '../../pages/list-student/list-student';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav:Nav;
  
  pages: [any]=null;


  teacherPages: [any] =[
    { 
      title:"TeacherPage",
      page:TeacherPage,
      icon:""
    },
    { title: "ListTeacherPage",
      page:ListTeacherPage,
      icon: ""
    }
  ];

  studentPages: [any] = [
    { 
      title:"StudentPage",
      page:StudentPage,
      icon: ""
    },
    {
      title:"ListStudent",
      page:ListStudentPage,
      icon: ""
    }
  ];

  viewPage(page:any){
    this.navCtrl.push(page);
  }


  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    public loginProvider: LoginProvider) {
  }
  //filtra la informacion a docente o studiante
  ionViewDidEnter(){
    console.log(this.loginProvider.rol);
    if(this.loginProvider.rol === "Docente"){ 
      this.pages = this.teacherPages;
      this.nav.setRoot(TeacherPage);
    }
    else{
      this.pages = this.studentPages;
      this.nav.setRoot(StudentPage);
    } 
  }
  //cerrar sesion
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }
  

}
