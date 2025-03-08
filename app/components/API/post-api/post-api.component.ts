import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent {
  carList: any[] = [];
  http = inject(HttpClient);

  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  };

  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: any) => {
        this.carList = res.data;
      });
  }

  onSavecar(){
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCars",this.carObj).subscribe((res: any) => {
      if(res.result){
        alert("Car Created Successfully, Thank you");
      }
    });
  }
}
