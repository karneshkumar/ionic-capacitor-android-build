import { Component, OnInit } from '@angular/core';
import { bookingData, BookingResult } from 'src/model/booking';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.page.html',
  styleUrls: ['./biding.page.scss'],
})
export class BidingPage implements OnInit {

  public bidings: any = new BookingResult();
  constructor() {
    this.bidings = bookingData;
  }

  ngOnInit() {
  }

}
