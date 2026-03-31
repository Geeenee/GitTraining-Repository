let anagramArray = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = (arr) => {
	let firstinstancesarray = []
	let duperegistry = []
	for ( let str of arr ) {
		let sortedstr = str.split('').sort().join('').tolowercase();
		if(duperegistry.includes(sortedstr)){
			continue;		
		}else{
			duperegistry.push(sortedstr);
		};
		
		firstinstancesarray.push(str);
	};

	return firstinstancesarray;
};
//aclean(anagramArray);
//return;
console.log(aclean(anagramArray))

return;
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");

console.log(keys);
return;
function unique(arr) {
	return Array.from(new Set(arr));	
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );
