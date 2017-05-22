import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScannedPage } from "../scanned-page/scanned-page";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
  private barcodeText: String;
  private barcodeFormat: String;
  private platform: Platform;
  private navController: NavController;
  constructor(public navCtrl: NavController, platform: Platform, public barcodeScanner:BarcodeScanner) {
    this.platform = platform;
    this.navController = navCtrl;
  }
  doScan() {
    console.log('scannig product barcode');
    this.platform.ready().then(() => {
      this.barcodeScanner.scan().then((result) => {
        if (!result.cancelled) {
          this.barcodeText = result.text;
          this.barcodeFormat = result.format;
          this.scanningDone(result.text);
          console.log("Formaaaaat" +this.barcodeFormat);
          console.log("Teeeext" +this.barcodeText);
        }
      }, (error) => {
        console.log('error when scanning product barcode');
      });
    });
  }
  scanningDone(data) {
    this.navController.push(ScannedPage, data);
  }
}
