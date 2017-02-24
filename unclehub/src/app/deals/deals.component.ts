/**
 * @author   : Rajkeshwawr Prasad (rajkeshwar.pd@gmail.com) 
 * @date     : 2017-02-24 17:08:25 
 * @copyright: (c) 2016 Unclehub Inc
 * @website  : https://www.unclehub.com/ 
 */
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'unclehub-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  posts:Array<number> = [];
  pages:Array<number> = [];
  images:Array<string>;

  constructor(private http:Http, private sanitizer: DomSanitizer) {
    for(let i = 0; i < 10; i++ ) {
      this.pages.push(i);
    }

    this.images = ['hotel.png', 'cream.jpg', 'product.png', 'travel.jpg', 'oculus.jpg', 'razor.jpg'];
  }

  ngOnInit() {
    this.fetchDeals().subscribe( resp => {
      this.posts = resp.data.posts
    });
  }

  domSanitizer( imageUrl ) {
    if( imageUrl === '') {
      imageUrl = `img/${this.images[(Math.floor(Math.random()*6)+1)-1]}`;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${imageUrl}`);
  }

  fetchDeals() {
    let base_url = 'https://api-unclehub.herokuapp.com';
    // https://unclehub-api.herokuapp.com/api/posts
    return this.http.get('assets/data/deals.json')
      .map( resp => resp.json());
  }

}
