// Vanilla JavaScript Navigation Component
class NavbarComponent {
  constructor() {
    this.isNavbarCollapsed = true;
    this.activeSection = 'home';
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.toggle('show');
    }
  }

  setActiveSection(section) {
    this.activeSection = section;
    this.isNavbarCollapsed = true;
    
    // Update active states
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${section}`) {
        link.classList.add('active');
      }
    });

    // Close mobile menu
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }

  init() {
    // Initialize event listeners
    const toggleButton = document.querySelector('.navbar-toggler');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleNavbar());
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
          const section = href.substring(1);
          this.setActiveSection(section);
        }
      });
    });
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NavbarComponent;
}
