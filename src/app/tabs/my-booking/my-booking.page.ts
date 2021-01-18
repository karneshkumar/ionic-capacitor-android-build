import { Component, OnInit } from '@angular/core';
import { bookingData, BookingResult } from 'src/model/booking';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.page.html',
  styleUrls: ['./my-booking.page.scss'],
})
export class MyBookingPage implements OnInit {

  public booking: any = new BookingResult();
  constructor() {
    this.booking = bookingData;
  }


  ngOnInit() {
  }

}
