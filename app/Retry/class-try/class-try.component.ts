import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-class-try',
  imports: [NgStyle, NgClass, FormsModule],
  templateUrl: './class-try.component.html',
  styleUrl: './class-try.component.css'
})
export class ClassTryComponent {
  isDarkMode = false;
  sidebarColor = '';
  username = '';
  isHighlighted = false;

  get textColor(): string {
    return this.isDarkMode ? 'white' : 'black';
  }
}
