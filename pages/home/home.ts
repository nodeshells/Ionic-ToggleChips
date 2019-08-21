import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chipsData = [
    {
      chipName:"Test", 
      clicksState: false
    },
    {
      chipName:"Test2", 
      clicksState: false
    }];

  constructor(public navCtrl: NavController) {

  }

  toggleChip(i){
    this.chipsData[i].clicksState = !this.chipsData[i].clicksState;
    const filtedData = this.chipsData.filter(chipdata => chipdata.clicksState === true);
    console.log(JSON.stringify(filtedData));
  }

}
