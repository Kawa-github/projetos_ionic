import { OptionsConPage } from './../options-con/options-con.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home-con',
  templateUrl: './home-con.page.html',
  styleUrls: ['./home-con.page.scss'],
})
export class HomeConPage implements OnInit {

  constructor(public navControl: NavController) { }
  ngOnInit() {
  }

  avancarPag(){
    this.navControl.navigateForward("options-con");

  }
}
