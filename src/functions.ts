{// Random function

function add( n1:number, n2:number) {
    let c:number  = n1+n2
    return c

}


// object > function > method

let all= {
    name:'fahim',
    job: 'no job',
    salry: 0,
    addsalary (salry:number){
        return this.salry + salry
    }

}


// spred operator

let b1: string[] = ['books1', 'boks2']
 let b2: string[] = [' boks3', 'books4']

 b1.push(...b2)



// rest operator


function tp(...items:string[]) {
    return items.forEach(e => 'hi')
}


tp('my', 'next')


// type alias

type Person = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    
    hobbies?: string[],
    isStudent: boolean;
   
}


let person:Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    hobbies: ["reading", "hiking", "photography"],
    isStudent: false,
   
};




















}