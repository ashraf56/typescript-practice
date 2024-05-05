{

type AllDatatype = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: [Object]
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}


// data featching with promise 
const allData =  async () :Promise<AllDatatype> => {

let res = await fetch('https://jsonplaceholder.typicode.com/users')

let data:AllDatatype = await res.json()
console.log( data);
return data
}



    // Promise 
    let Richman = {
        name: 'Rich',
        position: 'Frontend',
        salary: 13333330,
        laptop: {
            brand: 'Hp',
            processor: 'corei7'
        },
        Home: true
    }

interface RIchObj  {
    name: string,
    position: string,
    salary: number,
    laptop: {
        brand: string;
        processor:string
    },
    Home: boolean

}

const createmyPromise = ():Promise<RIchObj> => {

return new Promise<RIchObj> ((resolve, reject)=> {

let somteThings:RIchObj = Richman
if (somteThings) {
     resolve(somteThings)
} else {
    reject('faild')
}
}
) 
}


const dAta = async() => {
let show:RIchObj = await createmyPromise()


}



// map type 

type Area1 = {
    width:number; height:number

}
// check type
type checkTp = Area1['width']

type Area12={
    [index in keyof Area1]  : string
}



const mtArea:Area12 = {
    width:'12',
    height: '54'
}


// custom map type
type customArea<T>={
    [index in keyof T]  : T[index]
}

const customarea:customArea<{width:string, height: string}>={
width:'23', height:'34'
}

console.log(customarea);




























}