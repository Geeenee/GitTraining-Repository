function makeCounter(){
	let count = 0;

	function counter(){
		return count++;
	};

	counter.decrease = () => {
		return count--;
	};

	counter.set = function(n){
		return count = n;
	};

	return counter;

}


let counter = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter.set(10));

console.log(counter.decrease());
