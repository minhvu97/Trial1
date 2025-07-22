import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() activeSection: string = 'home';
  @Output() sectionChange = new EventEmitter<string>();

  onNavClick(event: Event, section: string) {
    event.preventDefault();
    this.sectionChange.emit(section);
  }
}
