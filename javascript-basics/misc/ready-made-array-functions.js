let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

let byField = (field) => {
	return function(a, b){
		return a[field] > b[field] ? 1 : -1
	};	
};

console.log(users.sort(byField('age')));
return;
{
let arr = [1, 2, 3, 4, 5, 6, 7];
  
  function inBetween(a, b) {
    return function(data){
	return data >= a && data <= b ? true : false;
    }
  }
  
  function inArray(valuesArr) {
	return function(data){
    		return valuesArr.find( item => item == data) ? true : false; 
	}
  }



//console.log(arr.filter(inArray([1, 2 ,3, 10])));
console.log(arr.filter(inBetween(2, 4)));
}
