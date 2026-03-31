let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);

console.log(readMessages);

let readDate = new WeakMap();

readDate.set(messages[0], new Date());
console.log(new Date());
