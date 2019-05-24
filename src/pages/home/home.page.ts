import { Component } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController){
    
  }
}
