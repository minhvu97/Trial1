export interface DesignPattern {
  name: string;
  description: string;
  usedIn: string;
  codeExample?: string;
  showCode?: boolean;
}

export class DesignPatternsComponent {
  designPatterns: DesignPattern[] = [
    {
      name: 'Singleton Pattern',
      description: 'Ensures only one instance of a class exists throughout the application.',
      usedIn: 'Database connections, logging, configuration',
      codeExample: `public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`,
      showCode: false
    },
    {
      name: 'Factory Pattern',
      description: 'Creates objects without specifying their exact class, promoting loose coupling.',
      usedIn: 'Object creation, dependency injection',
      codeExample: `public abstract class ShapeFactory {
    public static Shape createShape(String type) {
        switch (type) {
            case "circle": return new Circle();
            case "rectangle": return new Rectangle();
            default: throw new IllegalArgumentException();
        }
    }
}`,
      showCode: false
    },
    {
      name: 'Observer Pattern',
      description: 'Defines a one-to-many dependency between objects for automatic notifications.',
      usedIn: 'Event handling, MVC architecture',
      codeExample: `public interface Observer {
    void update(String message);
}

public class Subject {
    private List<Observer> observers = new ArrayList<>();
    
    public void notifyObservers(String message) {
        observers.forEach(o -> o.update(message));
    }
}`,
      showCode: false
    }
  ];

  toggleCodeExample(index: number): void {
    this.designPatterns[index].showCode = !this.designPatterns[index].showCode;
  }
}
