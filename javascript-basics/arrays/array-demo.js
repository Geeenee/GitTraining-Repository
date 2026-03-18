
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
