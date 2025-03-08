import { Component,linkedSignal,signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName = signal<string>("jhana")
  lastName = signal<string>("Karthik")

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newVal,preVal)=>{
      const fullName = newVal + "" + this.lastName()
      return fullName;
    }
  })

  onChange(){
    this.firstName.set("Hevanika")
  }

  user = signal({id:111,name:"jhana"});
  email= linkedSignal({
    source:this.user,
    computation: user=>`${user.name+user.id}@gmail.com`,
    equal:(a:any,b:any)=>a.id===b.id

  })

  changeID(){
    this.user.set({id:123,name:"hevan"})
  }    

}
