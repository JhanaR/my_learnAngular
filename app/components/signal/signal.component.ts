import { ChangeDetectionStrategy, Component,signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Jhana");
  lastName = signal<string>("Rajendran");
  courseName : string = "Angular";
  rollNo = signal<number>(0);

  constructor(){
    const val = this.firstName();
    setTimeout(()=>{
      // debugger;
      this.courseName ="React.js";
      // debugger;
      this.firstName.set("Hevanika");
    },3000);
  }

  onIncrement(){
    this.rollNo.update(value=>value+1)
  }
}
