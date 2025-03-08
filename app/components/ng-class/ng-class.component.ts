import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divButtColor : string = "bg-primary"
  divRadioColor : string = "bg-secondary"
  isChecked : boolean = false;
  textColor : string = '';


 addButtColor(className: string){
    this.divButtColor = className
  }

  addRadioColor(className: string){
    this.divRadioColor = className
  }

}
