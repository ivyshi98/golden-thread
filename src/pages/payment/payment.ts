import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';

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
  public paymentcharity: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.paymentcharity = this.navParams.get("name"); 
    
  }

  navigateToProfile(){
    this.navCtrl.push(PortfolioPage,{
      amount:this.amount,
      charityname: this.paymentcharity,
    });
  }
}
