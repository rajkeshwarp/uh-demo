/**
 * @author   : Rajkeshwawr Prasad (rajkeshwar.pd@gmail.com) 
 * @date     : 2017-02-24 17:07:00 
 * @copyright: (c) 2016 unclehub Inc 
 * @website  : https://www.unclehub.com
 */
import { Component } from '@angular/core';

@Component({
  selector: 'unclehub',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  deals:Array<number> = [];
  pages:Array<number> = [];

  constructor() {
    for(let i = 0; i < 8; i++ ) {
      this.deals.push(i);
    }

    for(let i = 0; i < 10; i++ ) {
      this.pages.push(i);
    }
  }

}
