import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScannedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scanned-page',
  templateUrl: 'scanned-page.html',
})
export class ScannedPage {
    private bcData;
    public photo;
    public contact;
    public aux;

  constructor(private navCtrl: NavController,navParams: NavParams) {
        this.bcData = navParams.data;
        this.aux = [];
        this.contact = {};
        console.log("dataaaaa: "+this.bcData);
  }

  ionViewDidEnter(){
    this.obtainData();
  }

  obtainData(){
    this.bcData = this.bcData.replace("ORG", "");
    this.bcData = this.bcData.replace("EMAIL;TYPE=INTERNET", "");
    this.bcData = this.bcData.replace("URL", "");
    this.bcData = this.bcData.replace("TEL;TYPE=CELL", "");
    this.bcData = this.bcData.replace("TEL", "");
    this.bcData = this.bcData.replace("TEL;TYPE=FAX", "");
    this.bcData = this.bcData.replace("ADR", "");
    this.bcData = this.bcData.replace("END", "");

    this.aux = this.bcData.split(":");
    this.contact.name = this.aux[3];
    this.contact.name = this.contact.name.replace(";", " ");
    this.contact.org = this.aux[4];
    this.contact.email = this.aux[5];
    this.contact.site = this.aux[6];
    this.contact.cel = this.aux[7];
    this.contact.phone = this.aux[8];
    this.contact.fax = this.aux[9];
    
    this.contact.address = this.aux[10];
    
    this.contact.street = this.contact.address.split(";")[2];
    this.contact.city = this.contact.address.split(";")[3];
    this.contact.state = this.contact.address.split(";")[4];
    this.contact.zipcode = this.contact.address.split(";")[5];
    this.contact.country = this.contact.address.split(";")[6];
    this.photo = "https://api.adorable.io/avatars/200/" + this.contact.email;
  }

}