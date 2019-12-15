import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPorjectPage } from './details-porject.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';


const routes: Routes = [
  {
    path: '',
    component: DetailsPorjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule
  ],
  declarations: [DetailsPorjectPage]
})
export class DetailsPorjectPageModule {}
