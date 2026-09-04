let dictionary = Object.create(null);

//dictionary.toString = function () {
//    console.log(Object.entries(this))
//};

Object.defineProperty(dictionary, 'toString', {
	value: function() { return Object.keys(this).join()},
	enumerable: false,

})

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary){
	//console.log(key);
}

//console.log(dictionary);
console.log(String(dictionary));
return;
function f3(a, b){
	console.log( a + b );
}

Function.prototype.defer = function(ms){
	let f = this;
	return function(...args){
		setTimeout(() => f.apply(this, args), ms);
	} 
};

//f3.defer(1000)(1, 2);


let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
}

user.sayHi = user.sayHi.defer(1000);

user.sayHi();
return;
function f2(){
	console.log('ellow');
}

Function.prototype.deferx = function(ms){
	setTimeout(this,ms);
}
//f2();
//let startMs = performance.now();
f2.defer(1000);
//console.log(performance.now() - startMs);

return;
function f(name){
	this.name = name;
}

let obj = new f('g');
let obj2 = new obj.constructor('c');
console.log(obj2);

return;
let head = {
  glasses: 1
};

let table = {
  __proto__ : head,
  pen: 3
};

let bed = {
  __proto__ : table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__ : bed,
  money: 2000
};

//console.log(pockets.pen);

let start = performance.now()
console.log(pockets.glasses);
console.log(performance.now() - start);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple




