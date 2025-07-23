import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solid-principles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solid-principles.component.html',
  styleUrls: ['./solid-principles.component.css']
})
export class SolidPrinciplesComponent {
  // Track which code examples are expanded
  codeStates = {
    s: false,
    o: false,
    l: false,
    i: false,
    d: false
  };

  toggleCode(principle: string) {
    this.codeStates[principle as keyof typeof this.codeStates] = !this.codeStates[principle as keyof typeof this.codeStates];
  }
}
