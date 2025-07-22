import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

// Import the components
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule,
    NavigationComponent,
    HomeComponent,
    DocumentationComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oop-showcase');
  protected activeSection = signal('home');
  protected selectedScreen = signal('home-page');

  isDocClicked = false;
  
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Global debug access available in browser console
    if (isPlatformBrowser(this.platformId)) {
      (window as any).debugApp = this;
    }
  }

  setActiveSection(section: string) {
    this.activeSection.set(section);
    if (section === 'documentation') {
      this.isDocClicked = true;
    }
    else {
      this.isDocClicked = false;
    }
  }

  setSelectedScreen(screen: string) {
    this.selectedScreen.set(screen);
  }

  onNavClick(event: Event, section: string) {
    event.preventDefault();
    this.setActiveSection(section);
  }

  onSectionChange(section: string) {
    this.setActiveSection(section);
  }

  // Debug method for console access (development only)
  debugState() {
    return {
      activeSection: this.activeSection(),
      selectedScreen: this.selectedScreen()
    };
  }
}
