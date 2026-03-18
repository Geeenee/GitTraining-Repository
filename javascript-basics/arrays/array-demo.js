let getArrayCenter = function(array){
	return Math.round( (((array.length -1) / 2) * 100) / 100 );
};


let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

styles[getArrayCenter(styles)] = 'Classics'

console.log( styles.shift() );

styles.unshift('Rap', 'Reggae');

console.log(styles)
