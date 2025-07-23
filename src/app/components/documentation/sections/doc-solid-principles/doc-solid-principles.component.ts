import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-solid-principles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-card">
      <div class="card-header bg-warning text-white">
        <h4><span class="icon-large">🎯</span> SOLID Principles Component - Interactive Learning</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="gradient-text">📋 Component Details</h5>
            <div class="highlight-box">
              <h6>File Location</h6>
              <code>src/app/components/home/solid-principles/solid-principles.component.ts</code>
            </div>
            <p><strong>Purpose:</strong> Most complex child component featuring interactive tooltips, collapsible code examples, and state management for the five SOLID principles.</p>
            
            <h6>🎯 SOLID Principles:</h6>
            <ul class="feature-list">
              <li><strong>S - Single Responsibility:</strong> Chef analogy with simple Employee/Chef comparison</li>
              <li><strong>O - Open/Closed:</strong> Phone case example with accessory extension</li>
              <li><strong>L - Liskov Substitution:</strong> Bird/Penguin example with consistent behavior</li>
              <li><strong>I - Interface Segregation:</strong> TV remote vs airplane controls analogy</li>
              <li><strong>D - Dependency Inversion:</strong> Light switch with interchangeable bulbs</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h5 class="gradient-text">🎮 Interactive Features</h5>
            <ul class="feature-list">
              <li><strong>Hover Tooltips:</strong> Real-world analogies appear on letter hover</li>
              <li><strong>Collapsible Code:</strong> Toggle buttons show/hide code examples</li>
              <li><strong>State Management:</strong> codeStates object tracks expansion state</li>
              <li><strong>Color-coded Letters:</strong> Each principle has unique color theme</li>
              <li><strong>Simplified Examples:</strong> Concise, relevant code matching analogies</li>
            </ul>
            
            <div class="code-section">
              <pre><code>export class SolidPrinciplesComponent {{ '{' }}
  // State management for interactive features
  codeStates = {{ '{' }}
    s: false, o: false, l: false, i: false, d: false
  {{ '}' }};

  toggleCode(principle: string) {{ '{' }}
    this.codeStates[principle as keyof typeof this.codeStates] = 
      !this.codeStates[principle as keyof typeof this.codeStates];
  {{ '}' }}
{{ '}' }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DocSolidPrinciplesComponent {

}
