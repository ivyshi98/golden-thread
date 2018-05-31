import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitydetailPage } from '../charitydetail/charitydetail';

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

  public charities: Array<object>;
  /*create a new class for chosen charity */
  public chosencharity: any;

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //create instances of charity 
    this.charities = [
      {name:'Wildlife Conservation Society', 
      info: "The Wildlife Conservation Society saves wildlife and wild places worldwide through science, conservation action, education, and inspiring people to value nature.",
      logo: "../../assets/imgs/wcs.png"},
      {name:'International Fund for Animal Welfare',
      info:"The International Fund for Animal Welfare is one of the largest animal welfare and conservation charities in the world. IFAW’s overarching mission is to protect animals and the places they call home.",
      logo: "../../assets/imgs/ifaw.jpg"},
      {name:'David Suzuki Founation',info:"The David Suzuki Foundation is a science-based environmental organization headquartered in Vancouver, British Columbia, Canada.The mission of the foundation is to 'protect the diversity of nature and our quality of life'."},
      {name:'Greenpop',info:"Enviromental NGO based in Cape Town"}
        ];
  }
  itemSelected(item: object) {
    console.log("Selected Item", item);
  }
  navigateToProfile(item: any){
    this.navCtrl.push(CharitydetailPage,{
      name:item.name,
      info:item.info,
      logo:item.logo

    });
  }
  

  
}
