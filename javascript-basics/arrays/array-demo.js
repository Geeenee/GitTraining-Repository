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
