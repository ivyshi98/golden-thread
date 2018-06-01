import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitydetailPage } from '../charitydetail/charitydetail';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';
 
/**
 * Generated class for the CharitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charitylist',
  templateUrl: 'charitylist.html',
})
export class CharitylistPage {

  public charities: Array<Charity> = [];
  /*create a new class for chosen charity */


  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //create instances of charity 
      var charity1 = new Charity();
      charity1.id = 1;
      charity1.name = 'Wildlife Conservation Society';
      charity1.info = "The Wildlife Conservation Society saves wildlife and wild places worldwide through science, conservation action, education, and inspiring people to value nature.";
      charity1.logo = "../../assets/imgs/Wildlife Conservation Society.png";

      var charity2 = new Charity();
      charity2.id = 2;
      charity2.name = 'International Fund for Animal Welfare';
      charity2.info = "The International Fund for Animal Welfare is one of the largest animal welfare and conservation charities in the world. IFAW’s overarching mission is to protect animals and the places they call home.";
      charity2.logo=  "../../assets/imgs/International Fund for Animal Welfare.png";
    
      this.charities.push(charity1);
      this.charities.push(charity2);
  }
   ionViewDidLoad(){
     console.log('ionViewDidLoad CharitylistPage');
   }
  navigateToProfile(charity: Charity){
    this.navCtrl.push(CharitydetailPage,{
      charity: charity
    });
  
  }  

  navigateToPayment(charity: Charity){
    this.navCtrl.push(PaymentPage,{
      charity:charity,
    });
  }
}
