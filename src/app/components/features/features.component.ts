import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-5 title-animate animate-fade-up">Technical Features</h1>
        <p class="text-center lead mb-5">Modern web development technologies and practices</p>
      </div>
    </div>
    
    <!-- Feature Cards -->
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100 animate-fade-up animate-delay-1">
          <div class="card-header bg-primary text-white">
            <h5><i class="fas fa-bolt"></i> Angular 20</h5>
          </div>
          <div class="card-body">
            <p>Latest Angular framework with standalone components and signal-based reactivity.</p>
            <ul class="small">
              <li>Standalone Components</li>
              <li>Signal-based State Management</li>
              <li>Server-Side Rendering</li>
              <li>Improved Performance</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card h-100 animate-fade-up animate-delay-2">
          <div class="card-header bg-success text-white">
            <h5><i class="fas fa-mobile-alt"></i> Bootstrap 5</h5>
          </div>
          <div class="card-body">
            <p>Mobile-first responsive design framework for modern web applications.</p>
            <ul class="small">
              <li>Responsive Grid System</li>
              <li>CSS Custom Properties</li>
              <li>Improved Accessibility</li>
              <li>Modern Browser Support</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card h-100 animate-fade-up animate-delay-3">
          <div class="card-header bg-info text-white">
            <h5><i class="fas fa-code"></i> TypeScript</h5>
          </div>
          <div class="card-body">
            <p>Type-safe development with enhanced developer experience and tooling.</p>
            <ul class="small">
              <li>Static Type Checking</li>
              <li>IntelliSense Support</li>
              <li>Modern ES Features</li>
              <li>Compile-time Error Detection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row mt-4">
      <div class="col-md-6 mb-4">
        <div class="card animate-fade-up animate-delay-1">
          <div class="card-header bg-warning text-white">
            <h5><i class="fas fa-paint-brush"></i> CSS3 Animations</h5>
          </div>
          <div class="card-body">
            <p>Smooth, performant animations using modern CSS3 features and GPU acceleration.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-6 mb-4">
        <div class="card animate-fade-up animate-delay-2">
          <div class="card-header bg-secondary text-white">
            <h5><i class="fas fa-universal-access"></i> Accessibility</h5>
          </div>
          <div class="card-body">
            <p>WCAG compliant with proper ARIA labels, semantic HTML, and keyboard navigation.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      transition: transform 0.2s ease-in-out;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .fas {
      margin-right: 8px;
    }
  `]
})
export class FeaturesComponent {
}
