"use strict";
/*
Decorators, similar to Java annotations, are prefixed with the "@" symbol before
the signature/name. Decorators can only be declared or "decorate" things/code that exists after compile (i.e. during runtime)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =========================
// CLASS DECORATOR
// =========================
function Logger(constructor) {
    console.log("Logger decorator:", constructor.name);
    // Add version to prototype
    constructor.prototype.version = "1.0";
    // Must return nothing or the constructor itself
}
// =========================
// PROPERTY DECORATORS
// requires getters and setters
// =========================
function LogProperty(target, propertyKey) {
    let value = target[propertyKey];
    const getter = () => {
        console.log(`Getting ${propertyKey}: ${value}`);
        return value;
    };
    const setter = (newVal) => {
        console.log(`Setting ${propertyKey} to ${newVal}`);
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
function MaxLength(length) {
    return function (target, propertyKey) {
        let value = target[propertyKey];
        const getter = () => value;
        const setter = (newVal) => {
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
function LogMethod(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with args:`, args);
        return original.apply(this, args);
    };
}
function LogParams(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        args.forEach((arg, index) => {
            console.log(`Param ${index} of ${propertyKey}:`, arg);
        });
        return original.apply(this, args);
    };
}
// =========================
// USER CLASS USING ALL DECORATORS
// =========================
let User = class User {
    constructor(name, nickname) {
        this.name = name;
        this.nickname = nickname;
    }
    greet(message, count) {
        console.log(`${this.name} says: ${message} (${count})`);
    }
    farewell(farewellMessage) {
        console.log(`${this.name} says: ${farewellMessage}`);
    }
};
__decorate([
    LogProperty,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    MaxLength(5),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    LogMethod,
    LogParams,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], User.prototype, "greet", null);
__decorate([
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], User.prototype, "farewell", null);
User = __decorate([
    Logger,
    __metadata("design:paramtypes", [String, String])
], User);
// =========================
// USAGE
// =========================
const user = new User("Alice", "Al");
user.name = "Bob"; // Logs get/set
console.log(user.name); // Logs get
user.nickname = "Short"; // OK
// user.nickname = "TooLongNickname"; // Throws error
user.greet("Hello", 2); // Logs method + params
user.farewell("Goodbye"); // Logs method
console.log("Class version:", user.version); // Version added by class decorator
