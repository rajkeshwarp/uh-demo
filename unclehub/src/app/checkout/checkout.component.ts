import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'unclehub-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  @ViewChild('translate') translate:ElementRef;
  @ViewChild('stepItem') stepItem:ElementRef;

  private translatePx:number;

  constructor() { 
    
  }

  ngOnInit() {
    this.translatePx = 0;
  }

  next() {
    this.translatePx += this.stepItem.nativeElement.offsetWidth + 28;
    this.translate.nativeElement.style.transform = `translate(-${this.translatePx}px)`;
  }

}
