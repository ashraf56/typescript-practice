{// Random function

function add( n1:number, n2:number) {
    let c:number  = n1+n2
    return c

}


// object > function > method

let all= {
    name:'fahim',
    job: 'no job',
    salry: 10,
    addsalary (salry:number){
        return this.salry + salry
    }

}



// spred operator

let b1: string[] = ['books1', 'boks2']
 let b2: string[] = [' boks3', 'books4']

 b1.push(...b2)

let [a,,...d] = b1





// rest operator


function tp(...items:string[]) {
 return   items.forEach(e => 'e')
}


console.log(tp());



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


// union |

type Webdevelper = 'Front' | " back"



const frontend:Webdevelper = 'Front'


// Intersection type is '&'


// nullish operator 

// '??'


let usera:any = {
    name:'ashraful',
    roll:7,
    sal:  1232032
}
let money= usera?.sal?.low ?? 'low not available'


//  Unknown type

const getdata = (value:unknown)=>{
if (typeof value === 'number') {
    console.log('value is number');
    
} else if (typeof value === 'string'){
    let [result, unit] = value.split(' ')
    
    
        console.log( 'value is again number');
    
}

}



// getdata('232 km')
// never type 

}