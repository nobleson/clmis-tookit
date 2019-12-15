import { element } from 'protractor';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details-porject',
  templateUrl: './details-porject.page.html',
  styleUrls: ['./details-porject.page.scss'],
})
export class DetailsPorjectPage {

  qrData = 'clmis.corbon.gov.ng';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController ) { }

  scanCode() {
   this.barcodeScanner.scan().then(
     barcodeData => {
        this.scannedCode = barcodeData;
     }
   );

  }

/*   downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas, toDataURL('image/jpeg').toString();
    console.log('data: ', imageData);

    let data = imageData.split(',')[1];
  } */

}

