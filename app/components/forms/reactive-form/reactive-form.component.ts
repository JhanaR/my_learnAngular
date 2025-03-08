import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    fName: new FormControl("",[Validators.required]),
    lName: new FormControl("",[Validators.required,Validators.minLength(5)]),
    userName: new FormControl("",[Validators.required,Validators.pattern("")]),
    city: new FormControl(""),
    state: new FormControl("Telengana"),
    zip: new FormControl(""),
    isAgree: new FormControl(false),
  })

  constructor(){
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable(); 
    }, 5000);
    const isValid =this.userForm.valid;
  }

  onUserSave(){
    debugger;
    const formValue = this.userForm.value;
    debugger;
  }

}
