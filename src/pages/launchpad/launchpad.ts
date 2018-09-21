import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad',
  templateUrl: 'launchpad.html',
})
export class LaunchpadPage {
  full = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadPage');
  }

  navToVehicles() {
    this.navCtrl.push("VehiclesPage");
  }

  navToAccounts() {
    this.navCtrl.push("AccountsPage");
  }

  navToReports() {
    this.navCtrl.push("ReportsPage");
  }

}
