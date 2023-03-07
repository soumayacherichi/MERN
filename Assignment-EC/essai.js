console.log(hello);                                   
var hello = 'world'; 
// undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// chicken
// half-chicken

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// c:\Users\souma\Desktop\MERN\essai.js:32
// mean();
// ^

// TypeError: mean is not a function
//     at Object.<anonymous> (c:\Users\souma\Desktop\MERN\essai.js:32:1)
//     at Module._compile (node:internal/modules/cjs/loader:1218:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
//     at Module.load (node:internal/modules/cjs/loader:1081:32)
//     at Module._load (node:internal/modules/cjs/loader:922:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.13.0

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// undefined
// rock
// r&b
// disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// san jose
// seattle
// burbank
// san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// { name: 'Chicago', students: 65, hiring: true }
// c:\Users\souma\Desktop\MERN\essai.js:99
//         dojo = "closed for now";
//              ^

// TypeError: Assignment to constant variable.
//     at makeDojo (c:\Users\souma\Desktop\MERN\essai.js:99:14)
//     at Object.<anonymous> (c:\Users\souma\Desktop\MERN\essai.js:90:13)
//     at Module._compile (node:internal/modules/cjs/loader:1218:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
//     at Module.load (node:internal/modules/cjs/loader:1081:32)
//     at Module._load (node:internal/modules/cjs/loader:922:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.13.0