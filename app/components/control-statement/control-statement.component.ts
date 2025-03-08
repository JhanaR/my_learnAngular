import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  divSoHd : boolean = false;
  isChecked: boolean = false;
  dayName: string = '';
  cityList: string[] =["Chennai","Trivendram","Goa","bangalore","pune"]
  employeeArray: any[] =[
    {empId:111, name:'ZZZ', city:"Chennai", contactNo:8166882808},
    {empId:222, name:'OOO', city:"Trivendram", contactNo:8025879960},
    {empId:333, name:'YYY', city:"Goa", contactNo:8822798110},
    {empId:444, name:'PPP', city:"bangalore", contactNo:8987224554},
    {empId:555, name:'LLL', city:"pune", contactNo:8357825698}
    ]

  showButt(show: boolean){
    this.divSoHd = show;
  }
  hideButt(hide: boolean){
    this.divSoHd = hide;
  }
}
