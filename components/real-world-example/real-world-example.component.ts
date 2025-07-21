export interface ClassItem {
  name: string;
  type: string;
  code: string;
}

export interface OOPBenefit {
  principle: string;
  description: string;
}

export interface RealWorldExample {
  title: string;
  classHierarchy: ClassItem[];
  oopBenefits: OOPBenefit[];
}

export class RealWorldExampleComponent {
  selectedClass: string = '';

  example: RealWorldExample = {
    title: 'E-Commerce System',
    classHierarchy: [
      { 
        name: 'Product', 
        type: 'Abstract base class',
        code: `abstract class Product {
    protected String id;
    protected String name;
    protected double price;
    
    public abstract double calculateTax();
    public abstract String getCategory();
    
    public double getPrice() { return price; }
    public void setPrice(double price) { 
        if (price > 0) this.price = price; 
    }
}`
      },
      { 
        name: 'Electronics', 
        type: 'Inherited class',
        code: `class Electronics extends Product {
    private int warrantyPeriod;
    
    public double calculateTax() {
        return price * 0.18; // 18% GST
    }
    
    public String getCategory() {
        return "Electronics";
    }
}`
      },
      { 
        name: 'Clothing', 
        type: 'Inherited class',
        code: `class Clothing extends Product {
    private String size;
    private String material;
    
    public double calculateTax() {
        return price * 0.12; // 12% GST
    }
    
    public String getCategory() {
        return "Clothing";
    }
}`
      },
      { 
        name: 'ShoppingCart', 
        type: 'Composition with Product',
        code: `class ShoppingCart {
    private List<Product> products;
    
    public void addProduct(Product product) {
        products.add(product);
    }
    
    public double getTotalPrice() {
        return products.stream()
                .mapToDouble(Product::getPrice)
                .sum();
    }
    
    public double getTotalTax() {
        return products.stream()
                .mapToDouble(Product::calculateTax)
                .sum();
    }
}`
      },
      { 
        name: 'PaymentProcessor', 
        type: 'Interface',
        code: `interface PaymentProcessor {
    boolean processPayment(double amount);
    String getPaymentMethod();
    boolean isSecure();
}`
      },
      { 
        name: 'CreditCard', 
        type: 'Implementation',
        code: `class CreditCard implements PaymentProcessor {
    private String cardNumber;
    private String expiryDate;
    
    public boolean processPayment(double amount) {
        // Credit card processing logic
        return validateCard() && chargeCard(amount);
    }
    
    public String getPaymentMethod() {
        return "Credit Card";
    }
    
    public boolean isSecure() {
        return true;
    }
}`
      }
    ],
    oopBenefits: [
      { 
        principle: 'Encapsulation', 
        description: 'Product price is private, accessed via methods with validation' 
      },
      { 
        principle: 'Inheritance', 
        description: 'Electronics and Clothing inherit common Product properties' 
      },
      { 
        principle: 'Polymorphism', 
        description: 'Different payment methods use same PaymentProcessor interface' 
      },
      { 
        principle: 'Abstraction', 
        description: 'Complex payment processing details are hidden behind simple interface' 
      }
    ]
  };

  selectClass(className: string): void {
    this.selectedClass = className;
  }

  getClassDetails(className: string): string {
    const classItem = this.example.classHierarchy.find(c => c.name === className);
    return classItem ? classItem.code : 'Class not found';
  }
}
