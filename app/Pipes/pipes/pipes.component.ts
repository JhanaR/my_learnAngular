import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PipeConceptPipe } from '../pipe-concept.pipe';


@Component({
  selector: 'app-pipes',
  imports: [NgFor,UpperCasePipe,LowerCasePipe,JsonPipe,DatePipe,PipeConceptPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  coursename: string ="AnGulAr";

  studentList: any = {
    name:'Jhana',
    city:'chn',
    gender:'female',
    contactNo:81716842
  }

  currentDate: Date =new Date();
  

cityList: string[] =["Chennai","Trivendram","Goa","bangalore","pune"];

employeeArray: any[] =[
{empId:111, city:"Chennai", contactNo:8166882808},
{empId:222, name:'OOO', city:"Trivendram", contactNo:8025879960},
{empId:333, name:'', city:"Goa", contactNo:8822798110},
{empId:444, name:null, city:"bangalore", contactNo:8987224554},
{empId:555, name:'LLL', city:"pune", contactNo:8357825698}
]

}

