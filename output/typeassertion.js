"use strict";
{
    // type Assertion 
    const kg = (value) => {
        if (typeof value === 'string') {
            let finalvalue = parseFloat(value) * 1000;
            return ` FinalValue is  ${finalvalue}`;
        }
        if (typeof value == 'number') {
            let finalvalue = value * 1000;
            return finalvalue;
        }
    };
    let result1 = kg(12);
    let myaccount = {
        name: 'Ashraful',
        acnumber: 1324424,
        adress: 'BD'
    };
    let myRoles = [1, 23, 545];
    let rolesss = ['2', '4', 'me', 4];
    // let manus:  Array<string> = ['k', 'y']
    let manus = ['k', 'y'];
    let manus2 = [23, 45, 34];
    let fullmanus = [...manus, ...manus2];
    let manuserObject = [
        {
            name: 't', age: 23, role: 'nai'
        },
        {
            name: 't2', age: 323, role: 'n2ai'
        }
    ];
    // normal tuple
    let humanObject = ['ami', 23, false];
    let HumanObject2 = ['tar', 34, true];
    let humanObjects = ['gpt', { name: 'chatgpt', model: 'ai' }, false];
    let poorman = {
        name: 'Poor',
        position: 'Frontend',
        salary: 0,
        laptop: {
            brand: 'Hp',
            processor: 'corei7'
        }
    };
    let Richman = {
        name: 'Rich',
        position: 'Frontend',
        salary: 13333330,
        laptop: {
            brand: 'Hp',
            processor: 'corei7'
        },
        Home: true
    };
    // function with generic
    let makearray = (param) => {
        return [param];
    };
    let makearraygen = (param) => {
        return [param];
    };
    let res1 = makearray('BDT');
    let res2 = makearraygen('12');
    let res3 = makearraygen({ id: 1, name: 'hakim', attendence: true });
    // Tuple
    let course = (param1, param2) => {
        return [param1, param2];
    };
    let res4 = course('Jkd', 12);
    const PgeroCourse = (student) => {
        let Corse = 'leve 2';
        return Object.assign(Object.assign({}, student), { Corse });
    };
    let res6 = PgeroCourse({
        name: 'omuk',
        id: 4,
        pay: true
    });
    let res7 = PgeroCourse({
        name: 'omuk',
        id: 4, pay: true,
        adress: 'barisal'
    });
    let res8 = PgeroCourse({
        id: 45, name: '4td', adress: ' bd', pay: true
    });
    let myOwn = "name";
    const getObjinfn = (obj, key) => {
        return obj[key];
    };
    let m = {
        name: 'abne', age: '24', price: '33'
    };
    let result1e = getObjinfn(m, 'age');
    console.log(result1e);
    // ts-node-dev --respawn --transpile-only server.ts / ts-node-dev --respawn --transpile-only src/typeassertion.ts
}
