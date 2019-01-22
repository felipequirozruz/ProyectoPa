import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Menu } from 'ionic-angular';
import { MyApp } from './app.component';
import { TeacherPage } from '../pages/teacher/teacher';
import { ListTeacherPage } from '../pages/list-teacher/list-teacher';
import { StudentPage } from '../pages/student/student';
import { ListStudentPage } from '../pages/list-student/list-student';
import { LoginPage } from '../pages/login/login';
import { RecoveryPassPage } from '../pages/recovery-pass/recovery-pass';
import { MenuPage } from '../pages/menu/menu';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { RutProvider } from '../providers/rut/rut';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    MyApp,
    TeacherPage,
    ListTeacherPage,
    StudentPage,
    ListStudentPage,
    LoginPage,
    RecoveryPassPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeacherPage,
    ListTeacherPage,
    StudentPage,
    ListStudentPage,
    LoginPage,
    RecoveryPassPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HttpClient,
    RutProvider
  ]
})
export class AppModule {}