function sum(a){
	let total = a;
	function accume(n){
		total += n;
		return accume;
	}

	accume.toString = () => {
		return total;
	};

	return accume;
}

console.log( +sum(1)(1) );
