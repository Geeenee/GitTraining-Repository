function printNumbers(from, to){ //nested setTimeout
	let current = from;
	let timeoutId = setTimeout(function printNum(){ console.log(current); if(from == to) clearTimeout(timeoutId); current++; setTimeout(printNum(), 1000)}, 1000)
};

printNumbers(1, 5);
return;

function printNumbers(from, to){ //setInterval
	let printInterval = setInterval(() => {console.log(from); if(from == to) clearInterval(printInterval); from++; }, 1000)
};

printNumbers(1, 5)
