import { RegisterPage } from './../pages/register/register';
import { RegisterStep2Page } from './../pages/register-step2/register-step2';
import { NewCarPage } from './../pages/new-car/new-car';
import { EventDetailPage } from './../pages/event-detail/event-detail';
import { EventPage } from './../pages/event/event';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { CarsProvider } from '../providers/cars/cars';
import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage, 
    EventDetailPage,
    LoginPage,
    NewCarPage,
    RegisterPage,
    RegisterStep2Page,
    ListPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    EventDetailPage,
    LoginPage,
    NewCarPage,
    RegisterPage,
    RegisterStep2Page,
    ListPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarsProvider,
    UsersProvider,
    FCM
  ]
})
export class AppModule {}
