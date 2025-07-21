import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oop-showcase');
  protected activeSection = signal('home');
  protected selectedScreen = signal('home-page');

  setActiveSection(section: string) {
    this.activeSection.set(section);
  }

  setSelectedScreen(screen: string) {
    this.selectedScreen.set(screen);
  }

  onNavClick(event: Event, section: string) {
    console.log('onNavClick called with section:', section);
    event.preventDefault(); // Prevent default anchor behavior
    this.setActiveSection(section);
    console.log('After setActiveSection, activeSection is now:', this.activeSection());
  }
}
