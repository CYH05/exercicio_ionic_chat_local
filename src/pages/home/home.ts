import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { appService } from '../../app/app.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  topic: String;
  name: String;
  constructor(public navCtrl: NavController) {
    this.topic = "";
  }

  clickToGo (){    
    if(this.topic != ""){
      this.navCtrl.push('ChatPage',{topic: this.topic, name: this.name});  
    }  
  }
}
