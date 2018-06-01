import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { Charity } from '../../models/charity';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public amount: string;
  public charitychosen: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charitychosen = this.navParams.get("charity"); 
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PaymentPage")
  }

  navigateToProfile(charity: Charity, amount: string){
    this.navCtrl.push(PortfolioPage,{
      charity:this.charitychosen,
      amount:this.amount
   
    });
  }
}
