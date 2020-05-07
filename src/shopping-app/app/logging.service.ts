import { Injectable } from '@angular/core';

// Service to demonstrate different injection methods - not related to project
@Injectable({ providedIn: 'root' })
export class LoggingService {
  lastlog: string;

  pringLog(message: string) {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }
}
