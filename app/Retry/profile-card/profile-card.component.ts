import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
user = {
  name: 'Jhana',
    photo: 'assets/jhanaR.jpg' // updated path
  };
}
