import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})

export class TabsPage implements OnInit {

  public isSearchbarOpened = false;
  constructor() { }

  ngOnInit() {
  }

  tab2selected() {
    console.log('I am Selected');
  }

}
