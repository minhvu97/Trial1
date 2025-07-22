import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-5 title-animate animate-fade-up">About This Project</h1>
        <p class="text-center lead mb-5">Educational showcase demonstrating modern web development</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card animate-fade-up animate-delay-1">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">🎯 Project Overview</h3>
            <p class="text-center mb-4">
              This project serves as an educational showcase of Object-Oriented Programming principles 
              while demonstrating modern Angular development practices and responsive web design.
            </p>
            
            <div class="row">
              <div class="col-md-6">
                <h5><i class="fas fa-graduation-cap"></i> Educational Goals</h5>
                <ul>
                  <li>Explain OOP fundamentals clearly</li>
                  <li>Demonstrate real-world applications</li>
                  <li>Show modern development practices</li>
                  <li>Create an engaging learning experience</li>
                </ul>
              </div>
              
              <div class="col-md-6">
                <h5><i class="fas fa-cogs"></i> Technical Objectives</h5>
                <ul>
                  <li>Angular 20 best practices</li>
                  <li>Component-based architecture</li>
                  <li>Signal-based state management</li>
                  <li>Responsive design implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row mt-4">
      <div class="col-md-4 mb-3">
        <div class="card h-100 text-center animate-fade-up animate-delay-2">
          <div class="card-body">
            <i class="fas fa-laptop-code fa-3x text-primary mb-3"></i>
            <h5>Modern Development</h5>
            <p class="small">Built with the latest web technologies and best practices for maintainable, scalable code.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-3">
        <div class="card h-100 text-center animate-fade-up animate-delay-3">
          <div class="card-body">
            <i class="fas fa-mobile-alt fa-3x text-success mb-3"></i>
            <h5>Responsive Design</h5>
            <p class="small">Optimized for all devices with mobile-first approach and flexible grid system.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-3">
        <div class="card h-100 text-center animate-fade-up animate-delay-4">
          <div class="card-body">
            <i class="fas fa-users fa-3x text-info mb-3"></i>
            <h5>User Experience</h5>
            <p class="small">Intuitive navigation, smooth animations, and accessible design for all users.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row mt-4">
      <div class="col-12 text-center">
        <div class="card bg-light animate-fade-up animate-delay-1">
          <div class="card-body">
            <h5><i class="fas fa-rocket"></i> Development Journey</h5>
            <p class="mb-0">
              This project represents a journey of learning and implementing modern web development practices,
              combining educational content delivery with technical excellence to create a comprehensive
              showcase of both programming fundamentals and contemporary development skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    
    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .fas {
      margin-right: 8px;
    }
    
    .fa-3x {
      margin-right: 0;
    }
  `]
})
export class AboutComponent {
}
