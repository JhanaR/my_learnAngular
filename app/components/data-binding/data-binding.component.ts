import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import {SharedDataService} from '../../Services/shared-data.service'


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // dummyData : any;
  // constructor(private _sharedData : SharedDataService) {
  //   this.dummyData = this._sharedData.userData
  // }
  firstName: string = "Hevan";
  rollNo: number = 123;
  isActive = true;
  lastName: string;
  isWorking: boolean = false;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter full Name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor(private router: Router) { //no need to declare this separately because its inbuilt
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive )
    this.lastName = "Karthik"
  }

  showWelcomeMessage () {
    alert("Welcome to Angular 19 Tutorials");
  }

  onChangeCity () {
    console.log("cityName");
  }
  navigateAdmin() {
    this.router.navigateByUrl("/admin");
  }
}
