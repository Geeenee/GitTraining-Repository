let checkSpam = (word) => {
	word = word.toLowerCase();
	if(word.includes('viagra') || word.includes('xxx')) return true;
	return false;
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
