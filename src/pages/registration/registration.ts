import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {

    public username: string;
    public password: string;

    constructor(public navCtrl: NavController) {

    }


    navigateToProfile(){
        this.navCtrl.push(ProfilePage,{
            username:this.username,
            password:this.password
        });
      }

}