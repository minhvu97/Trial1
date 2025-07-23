import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OopPillarsComponent } from './oop-pillars/oop-pillars.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { SolidPrinciplesComponent } from './solid-principles/solid-principles.component';
import { RealWorldExampleComponent } from './real-world-example/real-world-example.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    OopPillarsComponent,
    DesignPatternsComponent,
    SolidPrinciplesComponent,
    RealWorldExampleComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
