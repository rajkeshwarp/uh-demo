import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unclehub-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private active:string;

  constructor() { }

  ngOnInit() {
  }

  setActiveTab( activeTab ) {
    this.active = activeTab;
  }

}
