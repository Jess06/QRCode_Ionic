import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannedPage } from './scanned-page';

@NgModule({
  declarations: [
    ScannedPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannedPage),
  ],
  exports: [
    ScannedPage
  ]
})
export class ScannedPageModule {}
