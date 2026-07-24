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
