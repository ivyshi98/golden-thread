import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';


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

  public charityname: any;
  public charityinfo: any;
  public charitylogo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.charityname = this.navParams.get("name");  
    this.charityinfo = this.navParams.get("info") 
    this.charitylogo = this.navParams.get("logo")


}
  
  backToCharitylist(){
    this.navCtrl.pop();
  }

  navigateToPayment(){
    this.navCtrl.push(PaymentPage);
  }

}
