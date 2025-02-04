let a = 2;
console.log('a = ' + a + ' típusa ' + typeof a);

const pi = 3.14;
console.log('pi = ' + pi + ' típusa ' + typeof pi);

//osszeadas
console.log(0.1+0.2);
//osszeadas kerekitese
console.log((0.1+0.2).toFixed(2));


console.log(1/0); // Infinity
console.log(-1/0); // -Infinity


let firstname = "John";
let lastname = "Doe";

console.log(`Hello, ${firstname} ${lastname}`);

//objektumok
let person = {
    firstname: "John",
    lastname: "Doe",
    age: 40,
    isStudent: false
};

console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address); // undefined

// boolean
console.log(typeof true);
console.log(Boolean(0));
console.log(Boolean("a"));
console.log(Boolean(1));
