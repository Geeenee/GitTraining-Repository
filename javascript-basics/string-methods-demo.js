let ucFirst = (word) => {
	if ( !str ) return;

	let result = word[0].toUpperCase() + word.slice(1);
	return result;
};

console.log(ucFirst(`longwordtest`));
