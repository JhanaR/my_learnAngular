import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  dummyData : any;
  constructor(private _sharedData : SharedDataService) {
    this.dummyData = this._sharedData.userData
  }
  // userData = {
  //   id : 1,
  //   name: 'khan',
  //   username : 'khanKon',
  //   email: 'khaKon@gmail.com'
  // }
}
