/*
Decorators, similar to Java annotations, are prefixed with the "@" symbol. 
Decorators can only be declared or "decorate" things/code that exists after compile (i.e. during runtime)
For this reason, they cannot "decorate" interfaces or types (these are erased and turned into vanilla JS after compile)
and can only "decorate" classes.

Similar to Spring AOP - decorators are commonly used for cross-cutting concerns
such as logging, input validation, or security concerns

Decorators can only be of four distinct types, denoted by adherence to an exact signature
**** TypeScript v.4 or earlier
 - Method Decorator
   - This decorator takes three parameters: {target: Object, propertyKey: string | symbol, descript: PropertyDescriptor}
   - function methodDecorator(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor)
   - This decorator is called when the class that has this this decorator on a method is DEFINED.
 - Class Decorator
   - This decorator takes a single parameter, the constructor function of a class
   - Run on class DEFINITION (not instantiation!)
   - function classDecorator(constructor: Function)
 - Property Decorator
   - This decorator takes two parameters: {target: Object, propertyKey: string | symbol}
   - function propertyDecorator(target: Object, propertyKey: string | symbol)
   - allows for intercepting and modifying property behavior of types/interfaces at runtime
     - Needs getters/setters for interception
    - can also attach metadata at this time
 - Parameter Decorator
   - This decorator takes three parameters: {target: Object, methodName: string, paramIndex: number}
   - function parameterDecorator(target: Object, methodName: string, paramIndex: number)
   - Called on any parameter it decorates at CLASS DEFINITION
 - Accessor Decorator
   - Placed on getters and setters only
   - Can modify the property access logic
   - function accessorDecorator(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)
   - used with the get/set keywords and how TypeScript defines those accessor methods as different to regular methods

*** TypeScript v.5 or later
All decorators have a homogenized (value, context) signature. 
Compiler uses {typeof value} and {context METADATA} to determine decorator type
  - Method Decorator
   - function methodDecorator(value: Function, context: ClassMethodDecoratorContext)
   - return value: wrapper function OR void
 - Class Decorator
   - function classDecorator(constructor: Function, context: ClassDecoratorContext)
   - return value: new constructor
 - Property Decorator
   - function propertyDecorator(value: any, context: ClassFieldDecoratorContext)
   - return value: initializer (initivalValue) => any OR void
 - Parameter Decorator
   - function parameterDecorator(value: any, context: ClassMethodParameterDecoratorContext)
   - return value: metadata only, cannot change runtime args or execution
*/


// NOTE: The following decorators follow the TypeScript4 or lower signatures, as the tsconfig.json is configured for older TypeScript!!!

// =========================
// CLASS DECORATOR
// =========================
function Logger(constructor: Function) {
    console.log("Class decorator:", constructor.name);
    // Add version to prototype
    (constructor.prototype as any).version = "1.0";
    // Must return nothing or the constructor itself
}

// =========================
// PROPERTY DECORATORS
// NOTE: requires getters and setters!!!
// =========================
function LogProperty(target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = () => {
        console.log(`Property decorator: Getting public field "${propertyKey}": ${value}`);
        return value;
    };

    const setter = (newVal: any) => {
        console.log(`Property decorator: Setting public field "${propertyKey}" to ${newVal}`);
        value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// creates a validation check on max character length on the property it "decorates"
function MaxLength(length: number) {
    return function (target: any, propertyKey: string) {
        let value: string = target[propertyKey];

        const getter = () => value;
        const setter = (newVal: string) => {
            if (newVal.length > length) {
                throw new Error(`${propertyKey} cannot exceed ${length} characters`);
            }
            value = newVal;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

// =========================
// METHOD DECORATORS
// =========================
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method decorator: Calling ${propertyKey} with args:`, args);
        return original.apply(this, args);
    };
}

function LogParams(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        args.forEach((arg, index) => {
            console.log(`Method decorator: Param ${index} of ${propertyKey}:`, arg);
        });
        return original.apply(this, args);
    };
}

// =========================
// PARAMETER DECORATORS
// =========================
function LogParamIndex(target: Object, methodName: string | symbol, parameterIndex: number) {
    console.log(`Parameter #${parameterIndex} of ${String(methodName)}() is decorated`);
}

// =========================
// ACCESSOR DECORATORS
// =========================
function LogAccessor(target: Object, key: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;
  
    if (originalGet) {
      descriptor.get = function () {
        const value = originalGet.apply(this);
        console.log(`Accessor Decorator: Getter called for private field "${key}": ${value}`);
        return value;
      };
    }
    if (originalSet) {
      descriptor.set = function (value: any) {
        console.log(`Accessor Decorator: Setter called for private field "${key}" to ${value}`);
        return originalSet.apply(this, [value]);
      };
    }
  }

// =========================
// USER CLASS USING ALL DECORATORS
// =========================
@Logger
class User {
    @LogProperty
    public name: string;

    @MaxLength(5)
    public nickname: string;

    public version?: string;

    private _age: number;

    constructor(name: string, nickname: string, age: number) {
        this.name = name;
        this.nickname = nickname;
        this._age = age;
    }

    @LogAccessor // @LogAccessor will see the same field name "age" and apply to both get/set methods
    get age() {
        return this._age;
    }
    set age(age: number) {
        this._age = age;
    }

    @LogMethod
    @LogParams
    greet(@LogParamIndex message: string, @LogParamIndex count: number) {
        console.log(`${this.name} says: ${message} (${count})`);
    }

    @LogMethod
    farewell(@LogParamIndex farewellMessage: string) {
        console.log(`${this.name} says: ${farewellMessage}`);
    }
}


// =========================
// USAGE
// =========================
const user = new User("Alice", "Al", 25);

user.name = "Bob";          // Logs get/set of public field "name"
console.log("This is from console.log: " + user.name); // Logs get of public field "name"

user.age = 30;
console.log("This is from console.log: " + user.age);

user.nickname = "Short";    // OK
// user.nickname = "TooLongNickname"; // Throws error

user.greet("Hello", 2);     // Logs method + params
user.farewell("Goodbye");   // Logs method

console.log("Class version:", user.version); // Version added by class decorator
