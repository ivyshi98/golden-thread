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

  public charities: Array<string>;
  public charityname: string;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charities = [
      'Operation Smile',
      'American Heart Association',
      'David Suzuki Founation',
      'Greenpop'
    ];
    console.log("ionViewDidLoad CharitylistPage")
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  navigateToProfile(item: string){
    this.navCtrl.push(CharitydetailPage,{
      charityname:item
    });
  }
  
}
