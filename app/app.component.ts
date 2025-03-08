// import { Component, linkedSignal } from '@angular/core';
// import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { Component } from '@angular/core';
// import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { RouterLink, RouterOutlet} from '@angular/router';
// import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
// import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
// import { NgClassComponent } from "./components/ng-class/ng-class.component";
// import { NgClass } from '@angular/common';
// import { NgStyleComponent } from "./components/ng-style/ng-style.component";
// import { ControlStatementComponent } from "./components/control-statement/control-statement.component";
// import { SignalComponent } from "./components/signal/signal.component";
// import { AdminComponent } from './components/admin/admin.component';
// import { UserComponent } from './components/user/user.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
// import { NgIfComponent } from './components/ng-if/ng-if.component';
// import { NgForComponent } from './components/ng-for/ng-for.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterLink,AdminComponent,UserComponent,DataBindingComponent,NgIfComponent,NgForComponent,NgClassComponent,NgStyleComponent,ControlStatementComponent,SignalComponent,LinkedSignalComponent,TemplateFormComponent],
   imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trying For IT!!';
}
