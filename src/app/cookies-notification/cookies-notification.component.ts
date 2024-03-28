import { Component } from '@angular/core';

@Component({
  selector: 'cookies-notification',
  standalone: true,
  imports: [],
  templateUrl: './cookies-notification.component.html',
  styleUrl: './cookies-notification.component.css'
})
export class CookiesNotificationComponent {

  constructor() { }

  isHidden: boolean = false;

  /* A function that accepts all cookies */
  acceptAllCookies() {
    this.isHidden = true;
  }

  acceptNecessaryCookies() { 
    this.isHidden = true;
  }
  rejectAllCookies() { 
    this.isHidden = true;
  }



}
