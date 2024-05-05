{

    // class
    // normal class
    class Animal {
        public name: string;
        public size: string;
        public price: number;
        constructor(name: string, size: string, price: number) {
            this.name = name;
            this.size = size;
            this.price = price;
        }
        animanlsound() {
            console.log(`${this.name} price is  ${this.price} k`);

        }
    }


    let cow = new Animal('Red cow', 'big', 100000)


    //class using typescript

    class Modernanimal {
        constructor(public name: string, public price: number, public size: string) { }
        animanlsound2() {
            console.log(`${this.name} price is  ${this.price} k and size is ${this.size}`);
        }
    }
    // class instance 
    let bull = new Modernanimal('Red bull', 3000000, 'big')

    // inheritance 


    class Person {
        name: string;
        age: number;
        heigth: number;
        job: string

        constructor(name: string,
            age: number,
            heigth: number,
            job: string) {

            this.name = name; this.age = age; this.heigth = heigth; this.job = job
        }
        getCall() {
            console.log(`${this.name} `);

        }
    }
    class Person2 {


        constructor(
            public name: string,
            public age: number,
            public heigth: number,
            public job: string) {


        }
        getCall() {
            console.log('parent ');

        }
    }


    class ME extends Person2 {
        constructor(name: string,
            age: number,
            heigth: number,
            job: string) {
            super(name, age, heigth, job)
        }
        laptop() {
            console.log('i have laptop');

        }
    }
    class Myfriend extends Person2 {
        constructor(name: string,
            age: number,
            heigth: number,
            job: string) {
            super(name, age, heigth, job)
        }
        iphone() {
            console.log('i have iphone');

        }
    }
    // instance of guard

    // one way
    let getInfo = (person: Person2) => {
        if (person instanceof ME) {
            person.laptop()
        }
        else if (person instanceof Myfriend) {
            person.iphone()
        }
        else {
            person.getCall()
        }
    }

    // smart way 

    const isMe = (person: Person2): person is ME => {
        return person instanceof ME
    }
    const isfriend = (person: Person2): person is Myfriend => {
        return person instanceof Myfriend
    }

    let getInfoSmartway = (person: Person2) => {
        if (isMe(person)) {
            person.laptop()
        }
        else if (isfriend(person)) {
            person.iphone()
        }
        else {
            person.getCall()
        }
    }
    let ami = new ME('ashraful', 24, 5.6, 'nai')
    let friend = new Myfriend('ashraful', 24, 5.6, 'nai')
    //getInfo(friend)


    class Anotherperson extends Person {
        // position:string
        constructor(name: string,
            age: number,
            heigth: number,
            job: string, public position: string) {
            super(name, age, heigth, job)
            // this.position=position
        }
    }

    // anotherPublic.getCall()

    // type guard

    // type of

    type Num = string | number

    const sum = (p: Num, q: Num): Num => {
        if (typeof p === 'number' && typeof q === 'number') {
            return p + q
        } else {
            return p.toString() + q.toString()
        }

    }


    let res = sum('12', 34)

    // in guard

    type Admin = {
        name: string,
        role: 'admin'
    }
    type Random = {
        name: string
    }

    const getuser = (user: Admin | Random) => {
        if ('role' in user) {
            console.log(user.role);

        }
        else {
            console.log('no role ');

        }
    }


    let norma: Random = {
        name: 'd'
    }


    // getuser(norma)




    // access modifier

    class Bankaccont {

        public readonly id: number;
        public username: string;
        protected _balence: number;
        private token: string;

        constructor(id: number,
            username: string,
            _balence: number,
            token: string,) {

            this.id = id, this._balence = _balence, this.token = token, this.username = username


        }

        addBal(A: number) {
            return this._balence = this._balence + A
        }

        getStats() {
            console.log(`${this.id} ${this.username} has ${this._balence} and token is ${this.token}`);

        }
        // setter

        public set setballance(a: number) {
            this._balence = this._balence + a;
        }

        //getter
        get ball() {
            return this._balence
        }

    }

    let poormanac = new Bankaccont(12, 'Kty', 100, 'refd')
    // poormanac.addBal(90)
    poormanac.setballance = 10;
    let bal = poormanac.ball
    console.log(bal);

    // poormanac.getStats()

    class Studentac extends Bankaccont {
        ac() {
            this._balence
            this.username
        }
    }


}