"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // data featching with promise 
    const allData = () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield fetch('https://jsonplaceholder.typicode.com/users');
        let data = yield res.json();
        console.log(data);
        return data;
    });
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
    };
    const createmyPromise = () => {
        return new Promise((resolve, reject) => {
            let somteThings = Richman;
            if (somteThings) {
                resolve(somteThings);
            }
            else {
                reject('faild');
            }
        });
    };
    const dAta = () => __awaiter(void 0, void 0, void 0, function* () {
        let show = yield createmyPromise();
    });
    const mtArea = {
        width: '12',
        height: '54'
    };
    const customarea = {
        width: '23', height: '34'
    };
    console.log(customarea);
}
