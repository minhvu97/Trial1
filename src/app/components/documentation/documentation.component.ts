import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocHomePageComponent } from './sections/doc-home-page/doc-home-page.component';
import { DocOopPillarsComponent } from './sections/doc-oop-pillars/doc-oop-pillars.component';
import { DocNavigationComponent } from './sections/doc-navigation/doc-navigation.component';
import { DocArchitectureComponent } from './sections/doc-architecture/doc-architecture.component';
import { DocInteractiveFeaturesComponent } from './sections/doc-interactive-features/doc-interactive-features.component';
import { DocSolidPrinciplesComponent } from './sections/doc-solid-principles/doc-solid-principles.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [
    CommonModule,
    DocHomePageComponent,
    DocOopPillarsComponent,
    DocNavigationComponent,
    DocArchitectureComponent,
    DocInteractiveFeaturesComponent,
    DocSolidPrinciplesComponent
  ],
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {
  selectedScreen = signal('home-page');

  setSelectedScreen(screen: string) {
    this.selectedScreen.set(screen);
  }
}
