let extractCurrencyValue = function(currency){
	return currency ? value = +currency.slice( 1 ) : '';
};

console.log(extractCurrencyValue('$120') === 120);

return;
let truncate = (str, maxlength) => {
	
	return str.length < maxlength ? str : str.slice( 0 , maxlength - 1 ) + '\u2026';
};

console.log( truncate("Hi everyone!" ,20 ) )
console.log( truncate("What I'd like to tell on this topic is:" ,20 ) )
return;
let checkSpam = (word) => {
	word = word.toLowerCase();
	return word.includes('viagra') || word.includes('xxx');
};
console.log(checkSpam(`buy ViAgRA now`));
console.log(checkSpam(`free xxxxx`));
console.log(checkSpam(`innocent rabbit`));
return;
let ucFirst = (word) => {
	if ( !str ) return;

	let result = word[0].toUpperCase() + word.slice(1);
	return result;
};

console.log(ucFirst(`longwordtest`));
