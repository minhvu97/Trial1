export interface OOPPillar {
  title: string;
  definition: string;
  benefits: string[];
  codeExample: string;
  headerColor: string;
}

export class OOPPillarsComponent {
  oopPillars: OOPPillar[] = [
    {
      title: 'Encapsulation',
      definition: 'Bundling data and methods that operate on that data within a single unit (class).',
      benefits: [
        'Data hiding and security',
        'Controlled access through methods',
        'Easier maintenance and debugging'
      ],
      codeExample: `class BankAccount {
    private double balance;
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}`,
      headerColor: '#007bff'
    },
    {
      title: 'Inheritance',
      definition: 'Creating new classes based on existing classes, inheriting their properties and methods.',
      benefits: [
        'Code reusability',
        'Hierarchical classification',
        'Method overriding'
      ],
      codeExample: `class Animal {
    protected String name;
    public void eat() { /* implementation */ }
}

class Dog extends Animal {
    public void bark() {
        System.out.println(name + " is barking!");
    }
}`,
      headerColor: '#28a745'
    },
    {
      title: 'Polymorphism',
      definition: 'The ability of objects to take multiple forms - same interface, different implementations.',
      benefits: [
        'Flexibility in code design',
        'Runtime method resolution',
        'Easier code maintenance'
      ],
      codeExample: `abstract class Shape {
    abstract double calculateArea();
}

class Circle extends Shape {
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double calculateArea() {
        return width * height;
    }
}`,
      headerColor: '#ffc107'
    },
    {
      title: 'Abstraction',
      definition: 'Hiding complex implementation details while showing only essential features.',
      benefits: [
        'Simplified interface',
        'Reduced complexity',
        'Implementation independence'
      ],
      codeExample: `interface Vehicle {
    void start();
    void stop();
    void accelerate();
}

class Car implements Vehicle {
    public void start() {
        // Complex engine starting logic hidden
        System.out.println("Car started");
    }
}`,
      headerColor: '#dc3545'
    }
  ];

  getAnimationClass(index: number): string {
    const animations = [
      'animate-slide-left',
      'animate-slide-right',
      'animate-slide-left animate-delay-1',
      'animate-slide-right animate-delay-1'
    ];
    return animations[index];
  }
}
