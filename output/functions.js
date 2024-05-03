"use strict";
{ // Random function
    function add(n1, n2) {
        let c = n1 + n2;
        return c;
    }
    // object > function > method
    let all = {
        name: 'fahim',
        job: 'no job',
        salry: 0,
        addsalary(salry) {
            return this.salry + salry;
        }
    };
    // spred operator
    let b1 = ['books1', 'boks2'];
    let b2 = [' boks3', 'books4'];
    b1.push(...b2);
    // rest operator
    function tp(...items) {
        return items.forEach(e => 'hi');
    }
    tp('my', 'next');
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@example.com",
        hobbies: ["reading", "hiking", "photography"],
        isStudent: false,
    };
}
