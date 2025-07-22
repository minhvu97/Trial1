import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-5 title-animate animate-fade-up">Get In Touch</h1>
        <p class="text-center lead mb-5">Let's connect and discuss opportunities</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card animate-fade-up animate-delay-1">
          <div class="card-body">
            <h3 class="text-center mb-4"><i class="fas fa-envelope"></i> Professional Contact</h3>
            
            <div class="row text-center">
              <div class="col-md-4 mb-4">
                <div class="contact-item">
                  <i class="fab fa-linkedin fa-3x text-primary mb-3"></i>
                  <h5>LinkedIn</h5>
                  <p class="small text-muted">Professional networking and career updates</p>
                  <a href="#" class="btn btn-outline-primary btn-sm">Connect on LinkedIn</a>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="contact-item">
                  <i class="fab fa-github fa-3x text-dark mb-3"></i>
                  <h5>GitHub</h5>
                  <p class="small text-muted">Code repositories and project portfolio</p>
                  <a href="#" class="btn btn-outline-dark btn-sm">View GitHub Profile</a>
                </div>
              </div>
              
              <div class="col-md-4 mb-4">
                <div class="contact-item">
                  <i class="fas fa-envelope fa-3x text-success mb-3"></i>
                  <h5>Email</h5>
                  <p class="small text-muted">Direct communication for opportunities</p>
                  <a href="mailto:contact@example.com" class="btn btn-outline-success btn-sm">Send Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row mt-4">
      <div class="col-md-6 mx-auto">
        <div class="card bg-light animate-fade-up animate-delay-2">
          <div class="card-body text-center">
            <h5><i class="fas fa-clock"></i> Response Time</h5>
            <p class="mb-2">I typically respond to professional inquiries within:</p>
            <ul class="list-unstyled">
              <li><strong>Email:</strong> 24-48 hours</li>
              <li><strong>LinkedIn:</strong> 1-2 business days</li>
              <li><strong>GitHub:</strong> For technical discussions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row mt-4">
      <div class="col-12">
        <div class="card border-primary animate-fade-up animate-delay-3">
          <div class="card-body text-center">
            <h5 class="text-primary"><i class="fas fa-handshake"></i> Let's Collaborate</h5>
            <p class="mb-3">
              I'm always interested in discussing new opportunities, sharing knowledge, 
              and connecting with fellow developers and technology professionals.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-2">
              <span class="badge bg-primary">Angular Development</span>
              <span class="badge bg-success">Frontend Architecture</span>
              <span class="badge bg-info">TypeScript</span>
              <span class="badge bg-warning text-dark">UI/UX Design</span>
              <span class="badge bg-secondary">Mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-item {
      padding: 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .contact-item:hover {
      background-color: #f8f9fa;
      transform: translateY(-2px);
    }
    
    .card {
      transition: transform 0.2s ease-in-out;
    }
    
    .card:hover {
      transform: translateY(-2px);
    }
    
    .fas, .fab {
      margin-right: 8px;
    }
    
    .fa-3x {
      margin-right: 0;
    }
    
    .gap-2 > * {
      margin: 0.25rem;
    }
    
    @media (max-width: 576px) {
      .d-flex.gap-2 {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class ContactComponent {
}
