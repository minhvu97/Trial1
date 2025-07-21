export interface SOLIDPrinciple {
  letter: string;
  name: string;
  description: string;
  colorClass: string;
  example: string;
  showExample: boolean;
}

export class SOLIDPrinciplesComponent {
  solidPrinciples: SOLIDPrinciple[] = [
    {
      letter: 'S',
      name: 'Single Responsibility',
      description: 'A class should have only one reason to change',
      colorClass: 'text-primary',
      example: `// Bad - Multiple responsibilities
class User {
    saveToDatabase() { /* db logic */ }
    sendEmail() { /* email logic */ }
}

// Good - Single responsibility
class User { /* user data only */ }
class UserRepository { 
    save(user) { /* db logic */ } 
}
class EmailService { 
    send(message) { /* email logic */ } 
}`,
      showExample: false
    },
    {
      letter: 'O',
      name: 'Open/Closed',
      description: 'Open for extension, closed for modification',
      colorClass: 'text-success',
      example: `// Good - Open for extension
abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    calculateArea() { return width * height; }
}

class Circle extends Shape {
    calculateArea() { return Math.PI * radius ** 2; }
}`,
      showExample: false
    },
    {
      letter: 'L',
      name: 'Liskov Substitution',
      description: 'Objects should be replaceable with their subtypes',
      colorClass: 'text-warning',
      example: `// Good - Subtype can replace base type
class Bird {
    fly() { /* flying logic */ }
}

class Sparrow extends Bird {
    fly() { /* sparrow specific flying */ }
}

// penguin would violate LSP if it can't fly
// so create different hierarchy`,
      showExample: false
    },
    {
      letter: 'I',
      name: 'Interface Segregation',
      description: 'Many specific interfaces are better than one general',
      colorClass: 'text-info',
      example: `// Bad - Fat interface
interface Worker {
    work();
    eat();
    sleep();
}

// Good - Segregated interfaces
interface Workable { work(); }
interface Eatable { eat(); }
interface Sleepable { sleep(); }`,
      showExample: false
    },
    {
      letter: 'D',
      name: 'Dependency Inversion',
      description: 'Depend on abstractions, not concretions',
      colorClass: 'text-danger',
      example: `// Bad - High-level depends on low-level
class OrderService {
    private emailService = new EmailService();
}

// Good - Depend on abstraction
class OrderService {
    constructor(
        private notificationService: NotificationService
    ) {}
}`,
      showExample: false
    }
  ];

  getColumnClass(index: number): string {
    return index > 2 ? 'col-md-3' : 'col-md-2';
  }

  toggleExample(index: number): void {
    this.solidPrinciples[index].showExample = !this.solidPrinciples[index].showExample;
  }
}
