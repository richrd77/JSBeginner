var someVar;

//after api call - somevar
//if any while calling api
//in this case if error while calling api we can assign null
// console.log(someVar);


let someLet;
someLet = 'newLet';
// console.log(someLet);


//Hold Constant value - cannot be changed later
const someCont = 'SomeConst';
// console.log(someCont);


//difference between var & let
//TODO:- cover after function


var sum = 'F' + '5';
// console.log(sum);

//if type is string and if we add (a+b) = ab
//if type is number and if we add 1+2=3

//2021-10-08T20:49:00Z
var d = new Date();
// console.log(d);

//print d like dd-mm-yyyy
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());

// console.log(`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`);
// console.log(d.getDate().toString() + '-' + d.getMonth().toString() + '-' + d.getFullYear().toString());

// console.log(d.getDay());
// console.log(d.toISOString())
let nDate = new Date('2021-10-08T15:41:10.360Z')
console.log(nDate.toLocaleTimeString('EN-US'));