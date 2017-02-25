import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private step:number;
  private offerPicked:string;

  constructor() { 
    this.step = 1;
  }

  ngOnInit() {
  }


  switchOffer( offerType ) {
    this.offerPicked = offerType;
  }

  toStep( step ) {
    this.step = step;
  }

  prevStep() {
    this.step -= 1;
    if(this.step === 1) {
      this.offerPicked = undefined;
    }
  }

  nextStep() {
    this.step += 1;
  }

  addVendorOffer() {
    console.log('addVendorOffer');
  }

  close( modal ) {
    modal.hide();
    this.offerPicked = undefined;
  }
}
