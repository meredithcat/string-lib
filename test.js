class Foo {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`hello ${this.name}`);
    }
}

let f = new Foo("my name");

helloFn = f.hello.bind(f);
helloFn();
