"use strict";
var _a, _b;
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
    const frontend = 'Front';
    // Intersection type is '&'
    // nullish operator 
    // '??'
    let usera = {
        name: 'ashraful',
        roll: 7,
        sal: 1232032
    };
    let money = (_b = (_a = usera === null || usera === void 0 ? void 0 : usera.sal) === null || _a === void 0 ? void 0 : _a.low) !== null && _b !== void 0 ? _b : 'low not available';
    //  Unknown type
    const getdata = (value) => {
        if (typeof value === 'number') {
            console.log('value is number');
        }
        else if (typeof value === 'string') {
            let [result, unit] = value.split(' ');
            console.log('value is again number');
        }
    };
    // getdata('232 km')
    // never type 
}
