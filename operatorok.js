console.log(5 == "5"); // true tpusok viszgalata nelkul
console.log(5 === "5"); // false tipusok viszgalataval
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

let a = "6";
console.log(`a: ${a}`);	
console.log(!(a < 5));

console.log(a > 5 && a < 20);
console.log(a === 5 || a === 20); 
console.log(a > 5 && typeof a === "string");

// Aritmetikai opratorok
let z; 
z=3+4; // összeadás
console.log(z);

z=3-4; // kivonás
console.log(z);

z=2*3; // szorzás
console.log(z);

z=2/3; // osztás
console.log(z);

z=3%2; // modulo
console.log(z);

z=3**2; // hatványképzés (hatványalap**hatványkitevő
console.log(z);

// Preinkrement es posztinkrement
let x,y; 
x=5; 
y=++x; // preinkrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=x++; // posztinkrement 
console.log(`x=${x}, y=${y}`); 

x=5; 
y=--x; // predekrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=x--; // posztdekrement 
console.log(`x=${x}, y=${y}`); 

let g = 'kocka'; 
g += 'has'; // x értéke így: 'kockahas'
console.log(g);

const gyumolcs = { fa: 'alma', fajta: 'Starking', szin: 'piros' }; 
console.log('fajta' in gyumolcs); //true
console.log(gyumolcs instanceof  Object); //false

