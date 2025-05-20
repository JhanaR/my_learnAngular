import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  userData = {
    id : 1,
    name: 'khan',
    username : 'khanKon',
    email: 'khaKon@gmail.com',
    subscription: 'basic'
  }
}
