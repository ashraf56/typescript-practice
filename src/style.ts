
function add2(a: number, b: number) {
    let c = a + b
    return c
}
let sd = add2(10, 32)


let ob: {
    name: string,
    roll: number,
    regular: boolean
}

ob = {
    name: 'ashraful',
    roll: 12,
    regular: true

}
console.log(ob);

let table: string[] = ['laptop', 'box']
table.push('')
// let c:string (Explicit )  let obj:(number | string )[] Union Types

// tuple> array ---> order -- > Type of values

let abs: [number, string, boolean] = [1, 'f', false]


let user: {
    readonly company: 'Intershala'; // type --> literal type 
    name: string;
    position?: string;  // optional literal type

} =
{
    company: 'Intershala',
    name: 'ashraful',

}

// tsc -w
let age:number= 123
if(age>18){
    console.log('adult');
    
}
else{
    console.log('not');
    
}