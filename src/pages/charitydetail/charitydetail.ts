import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Charity } from '../../models/charity';


/**
 * Generated class for the CharitydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charitydetail',
  templateUrl: 'charitydetail.html',
})
export class CharitydetailPage {

  public charitydetail: Charity;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.charitydetail = this.navParams.get("charity");
  }


  ionViewDidLoad(){
    console.log("ionViewDidLoad CharitydetailPage");
   
  }
  
  backToCharitylist(){
    this.navCtrl.pop();
  }

  navigateToPayment(charity: Charity){
    this.navCtrl.push(PaymentPage,{
      charity:this.charitydetail,
    });
  }


}
