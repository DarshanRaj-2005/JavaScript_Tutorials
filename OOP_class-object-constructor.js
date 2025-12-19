/*OBJECT CODE IN OOP */
/*OOP IS JUST ORGAINZING THE CODE INTO OBJECTS*/
let obj1 = {
    name : 'dharshan',
    age : 21,
    greet(){
        console.log('Hello'+this.name);
        console.log(this.age);
    }
    /*We can use many methods inside this objects. 'this' keyword is to refer the objects inside the same objects.*/
}

/*CLASS CODE IN OOP*/
/*CLASS IS JUST GENERATOR OF OBJECT*/

class Users {
    /*Class name should have pascalname. It don't have ':' instead '='   ',' instead ';'. */

    /*Constructor is to run the code when object creation happens.*/
    constructor(name,age){
        this.name = name;
        this.name = age;
        /*Objects are used inside constructor to reuse that objects for different arguments.*/
    }

    greet(){
        console.log('hello'+this.name);
    }
}

let user1 = new Users('Dharshan',21);
let user2 = new Users('Darshan',20);

/*New keyword is the object creation.*/