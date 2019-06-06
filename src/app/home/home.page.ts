import { Component, OnInit, Input } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CredenciasDTO } from 'src/models/credencias.dto';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  creds: CredenciasDTO = {
    email: '',
    senha: ''
  };

  constructor(
    public navCtrl: NavController, 
    private router: Router, 
    public menuCtrl: MenuController,
    public auth: AuthService){
    
  }
  // ngOnInit() {
  //   // this.menuCtrl.enable(false);
  // }
  
  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave(){
    this.menuCtrl.enable(true);
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.successfullLogin(response.headers.get('Authorization'));
      this.router.navigateByUrl('/categorias');
    },
    error =>{});
    
    // this.navCtrl.navigateForward('CategoriasPage');
    // this.navCtrl.setRoot('CategoriasPage');
  }
}
