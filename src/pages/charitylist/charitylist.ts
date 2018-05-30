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
  public chosencharity: any;

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charities = [
      {name:'Operation Smile', info: "Operation Smile is a nonprofit medical service organization founded in 1982 by Dr. William P. Magee, Jr. and his wife Kathy Magee. It is headquartered in Virginia Beach, Virginia."},
      {name:'American Heart Association',info:"The American Heart Association (AHA) is a non-profit organization in the United States that fosters appropriate cardiac care in an effort to reduce disability and deaths caused by cardiovascular disease and stroke"},
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
      info:item.info

    });
  }
  
}
