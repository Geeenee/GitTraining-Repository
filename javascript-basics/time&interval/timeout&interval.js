function printNumbers(from, to){ //nested setTimeout
	if(from > to) return;

	console.log(from);

	setTimeout(printNumbers, 1000, from + 1, to)
};

function printNumbers(from, to){ //setInterval
	let printInterval = setInterval(() => {console.log(from); if(from == to) clearInterval(printInterval); from++; }, 1000)
};

printNumbers(1, 5)
