import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AngularAppEngine } from '@angular/ssr';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

cityList: string[] =["Chennai","Trivendram","Goa","bangalore","pune"]

employeeArray: any[] =[
{empId:111, name:'ZZZ', city:"Chennai", contactNo:8166882808},
{empId:222, name:'OOO', city:"Trivendram", contactNo:8025879960},
{empId:333, name:'YYY', city:"Goa", contactNo:8822798110},
{empId:444, name:'PPP', city:"bangalore", contactNo:8987224554},
{empId:555, name:'LLL', city:"pune", contactNo:8357825698}
]

}
