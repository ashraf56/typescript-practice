{




// type Assertion 


 const kg = (value:string | number ) => {
    if (typeof value  === 'string') {
        
        let finalvalue = parseFloat(value)*1000;
        return` FinalValue is  ${finalvalue}`

    }  if( typeof value == 'number') {
        let finalvalue = value*1000;
        return finalvalue
    }
}

let result1 = kg(12) as number
// console.log(result1);




// Interface

type Accountinfo1 = {
    name:string,
    acnumber:number,

}

// type alias with intersection operation. 
type ExtendedaccInfo = Accountinfo1 & { adress:string }

interface Accountinfo {
    name:string,
    acnumber: number,
    adress: string
}
// extended interface
interface Accountinfo3 extends Accountinfo1 {
  adress: string
   
}


let myaccount:Accountinfo3 = {
name:'Ashraful',
acnumber:1324424,
adress:'BD'

}

// Js > object> array> FN

// create & set array types
type Roles = number[]

let myRoles:Roles = [1,23,545]

interface Rolesss  {
[index: number] : string | number 


}

let rolesss:Rolesss = ['2','4', 'me',4]



// generic type

type GenericDynamic<T>=  Array<T>

// let manus:  Array<string> = ['k', 'y']
let manus:  GenericDynamic<string> = ['k', 'y']

let manus2: GenericDynamic<number>= [23,45,34]

let fullmanus:GenericDynamic<string|number>= [...manus,...manus2]

let manuserObject:GenericDynamic<{name:string,age:number,role:string}> =[
    {
        name:'t', age:23,role:'nai'
    },
    {
        name:'t2', age:323,role:'n2ai'
    }
]


// normal tuple
let humanObject:[string,number,boolean]= ['ami', 23,false]
// generic tuple 
type Gentuple<X,M,L>=[X,M,L]

let HumanObject2:Gentuple<string,number,boolean>= ['tar',34, true]

let humanObjects:Gentuple<string,{name:string,model:string},boolean> = ['gpt', {name:'chatgpt', model:'ai'},false]

console.log(humanObjects);

// ts-node-dev --respawn --transpile-only server.ts / ts-node-dev --respawn --transpile-only src/typeassertion.ts





















}