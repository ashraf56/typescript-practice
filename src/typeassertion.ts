{




    // type Assertion 


    const kg = (value: string | number) => {
        if (typeof value === 'string') {

            let finalvalue = parseFloat(value) * 1000;
            return ` FinalValue is  ${finalvalue}`

        } if (typeof value == 'number') {
            let finalvalue = value * 1000;
            return finalvalue
        }
    }

    let result1 = kg(12) as number
    // console.log(result1);




    // Interface

    type Accountinfo1 = {
        name: string,
        acnumber: number,

    }

    // type alias with intersection operation. 
    type ExtendedaccInfo = Accountinfo1 & { adress: string }

    interface Accountinfo {
        name: string,
        acnumber: number,
        adress: string
    }
    // extended interface
    interface Accountinfo3 extends Accountinfo1 {
        adress: string

    }


    let myaccount: Accountinfo3 = {
        name: 'Ashraful',
        acnumber: 1324424,
        adress: 'BD'

    }

    // Js > object> array> FN

    // create & set array types
    type Roles = number[]

    let myRoles: Roles = [1, 23, 545]

    interface Rolesss {
        [index: number]: string | number


    }

    let rolesss: Rolesss = ['2', '4', 'me', 4]



    // generic type . generalize any type or dynamic and resuble type

    type GenericDynamic<T> = Array<T>

    // let manus:  Array<string> = ['k', 'y']
    let manus: GenericDynamic<string> = ['k', 'y']

    let manus2: GenericDynamic<number> = [23, 45, 34]

    let fullmanus: GenericDynamic<string | number> = [...manus, ...manus2]

    let manuserObject: GenericDynamic<{ name: string, age: number, role: string }> = [
        {
            name: 't', age: 23, role: 'nai'
        },
        {
            name: 't2', age: 323, role: 'n2ai'
        }
    ]


    // normal tuple
    let humanObject: [string, number, boolean] = ['ami', 23, false]
    // generic tuple 
    type Gentuple<X, M, L> = [X, M, L]

    let HumanObject2: Gentuple<string, number, boolean> = ['tar', 34, true]

    let humanObjects: Gentuple<string, { name: string, model: string }, boolean> = ['gpt', { name: 'chatgpt', model: 'ai' }, false]


    interface Deve<T, H = null> {
        name: string;
        position: string;
        salary: number;
        laptop: T;
        Home?: H;

    }

    interface Laptop {
        brand: string;
        processor: string
    }

    let poorman: Deve<Laptop> = {
        name: 'Poor',
        position: 'Frontend',
        salary: 0,
        laptop: {
            brand: 'Hp',
            processor: 'corei7'
        }
    }


    let Richman: Deve<Laptop, boolean> = {
        name: 'Rich',
        position: 'Frontend',
        salary: 13333330,
        laptop: {
            brand: 'Hp',
            processor: 'corei7'
        },
        Home: true
    }

    // function with generic

    let makearray = (param: string): string[] => {
        return [param]
    }

    let makearraygen = <T>(param: T): T[] => {
        return [param]
    }
    type Data = {
        id: number; name: string; attendence: boolean
    }

    let res1 = makearray('BDT')
    let res2 = makearraygen<string>('12')
    let res3 = makearraygen<Data>({ id: 1, name: 'hakim', attendence: true })

    // Tuple
    let course = <T, W>(param1: T, param2: W): [T, W] => {
        return [param1, param2]

    }
    let res4 = course<string, number>('Jkd', 12)


    // return with fixed value and Constraints 

    // enforce new rule in a function or object in typescript
    interface Mustneed {
        id: number;
        name: string;
        pay: boolean
    }

    const PgeroCourse = <T extends Mustneed>(student: T) => {

        let Corse = 'leve 2';

        return {
            ...student, Corse
        }
    }
    type Student = {
        name: string; id: number; pay: boolean
    }

    let res6 = PgeroCourse<Student>({
        name: 'omuk',
        id: 4,
        pay: true
    }
    )
    let res7 = PgeroCourse
        <Student & { adress: string }>
        ({
            name: 'omuk',
            id: 4, pay: true,
            adress: 'barisal'
        })

    let res8 = PgeroCourse({
        id: 45, name: '4td', adress: ' bd', pay: true
    })


// constrain with generic . use of key of

type Gari ={
    name:string;
    model:string;
    price:number
}

type Owner1 = "name" | "model" | "price"
type Owner =  keyof Gari

let myOwn : Owner = "name"


const getObjinfn = <O , K extends keyof O > (obj:O , key:K) =>{
    return obj[key]
}

let m =  {
    name:'abne',age:'24', price:'33'
}


let result1e = getObjinfn(m,'age')


console.log(result1e);



    // ts-node-dev --respawn --transpile-only server.ts / ts-node-dev --respawn --transpile-only src/typeassertion.ts





















}