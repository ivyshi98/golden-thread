import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharitylistPage} from '../charitylist/charitylist'
import { PortfolioPage } from '../portfolio/portfolio';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
        public username: string;
        public password: string;
     

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        
    }


    ionViewDidLoad(){
        this.username = this.navParams.get("username");
        this.password = this.navParams.get("password");
 
        
    }

    navigateToHome(){
        this.navCtrl.popToRoot();
        /*Show data*/
    }
    
    navigateToExplore(){
        this.navCtrl.push(CharitylistPage);
    }

    navigateToPortfolio(){
        this.navCtrl.push(PortfolioPage);
      }

}