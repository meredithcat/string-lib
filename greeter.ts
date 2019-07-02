interface MyInterface {
    constructor();
    getName(): string;
}

class MyClass implements MyInterface {
    constructor() {}

    getName() { return "name" };
}
