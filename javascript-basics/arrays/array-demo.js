let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let unique = function(arr){
	let list = [];
	arr.forEach( ( string ) => {
		if(!list.includes(string)) list.push(string);
	});
	return list;
}

console.log( unique(strings) );
return;

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };

//let users = [ pete, john, mary ];

//let getAverageAge = (arr) => { 
//	return Math.ceil( avrAge = arr.reduce( ( sum, user ) => sum + user.age, 0) / arr.length );
//};

//console.log( getAverageAge(users) );

return;
let shuffle = (arr) => {
	arr.sort( () => Math.random() - 0.5)
};

let numArr = [1, 2, 3]

shuffle(numArr);
console.log(numArr);

return;
//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };

//let users = [ pete, john, mary ];

//let sortByAge = (arr) => { 
//	arr.sort( (a, b) => a.age - b.age)
//};

//sortByAge(users);

//console.log(users)

return;
//let john = { name: "John", surname: "Smith", id: 1 };
//let pete = { name: "Pete", surname: "Hunt", id: 2 };
//let mary = { name: "Mary", surname: "Key", id: 3 };

//let users = [ john, pete, mary ];

//let usersMapped = users.map( item => ({ fullName:`${item.name} ${item.surname}`, id: item.id })) 
//console.log(usersMapped);
return;

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };

//let users = [ john, pete, mary ];

//let names = users.map((item) => item.name)
//console.log(names);

return;
function Calculator(){
	
	this.calculate = (problem) => {
		let prob = problem.split(' ')
	
		return this.operation[prob[1]](+prob[0], +prob[2])
	}

	this.addMethod = (operator, fn) => {
		this.operation[operator] = fn
	}
	
	this.operation = {
		"+": (a, b) => a + b
	}
}

let session = new Calculator();

//console.log(session);
session.addMethod("**", (a, b) => a ** b)
console.log(session.operation);

console.log(session.calculate('5 ** 5'))

return;
let webComponentsArray = ["HTML", "Javascript", "CSS"];

let copySorted = function( arr ){
	let arrCopy = arr.slice(0);
	return arrCopy.sort();
};

let sorted = copySorted( webComponentsArray );

console.log( sorted );
console.log( webComponentsArray );

return;
let arr = [5, 2, 1, -10, 8];

console.log(arr.sort((a, b) => b - a));

return;
let baseArray1 = [5, 3, 8, 1];

let filterInPlace = (arr, a, b) => {
	for(let i = (arr.length - 1); i >= 0; i-- ){
		console.log(i);
		if(arr[i] < a || arr[i] > b) baseArray1.splice(i, 1);
	}
}

filterInPlace(baseArray1, 2, 4);
console.log(baseArray1);
return;

let baseArray = [5, 3, 8, 1];

let filtered = ((arr, a, b) => {
	return arr.filter(item => item >= a && item <= b)
})(baseArray, 1, 4)

console.log(filtered);
return;
let camelize = (str) => {
	let splitStr = str.split('-');
	let camelCaseStr = splitStr.map( (item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
	console.log(camelCaseStr);


};

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
return;
let getArrayCenter = function(array){
	return Math.round( (((array.length -1) / 2) * 100) / 100 );
};


let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

styles[getArrayCenter(styles)] = 'Classics'

console.log( styles.shift() );

styles.unshift('Rap', 'Reggae');

console.log(styles)
