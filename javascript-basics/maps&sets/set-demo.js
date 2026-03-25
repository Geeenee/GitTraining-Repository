function unique(arr) {
	let dataSet = new Set()
  	for (let value of arr){
		dataSet.add(value);
		//console.log(value);
  	} 
	let arry = []
	for (let value of dataSet){
		arry.push(value);
	}
	return arry;
	
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );
