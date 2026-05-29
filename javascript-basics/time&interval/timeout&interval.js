function printNumbers(from, to){ //nested setTimeout
	if(from > to) return;

	console.log(from);

	setTimeout(printNumbers, 1000, from + 1, to)
};

printNumbers(1, 5)
