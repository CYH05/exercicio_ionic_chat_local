import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { appService } from '../../app/app.service';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  
  txtComment;
  name;
  parametro;
  objeto;
  constructor(public navCtrl: NavController, public navParams: NavParams,private Object: appService) {
    this.parametro = this.navParams.get("topic");
    this.name = this.navParams.get("name");
    this.txtComment = "";
    console.log(this.parametro);
    console.log(this.name);
    
    if(this.parametro == 'film'){
      this.objeto = Object.films;
    }else{
      this.objeto = Object.sports;
      
    }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  sendClick(){
    if(this.txtComment != ""){
      if(this.parametro == 'film'){
        this.Object.addFilm(this.name, this.txtComment);
        
      }else{
        this.Object.addSport(this.name, this.txtComment);
      }
    }
    this.txtComment = "";
  }
}
