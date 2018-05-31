import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController) {

  }
  navigateToLogin(){
    this.navCtrl.push(LoginPage);
  }
  navigateToRegistration(){
    this.navCtrl.push(RegistrationPage);
  }

  navigateToProfile(){
    this.navCtrl.push(ProfilePage,{
    /*
    connect to profile, send data 
    */
   username:this.username,
   password:this.password
  });
}
}

/*
 <ion-img width="80%" height="15%" src='../../assets/imgs/charity.jpg'></ion-img>
  <br>
 */