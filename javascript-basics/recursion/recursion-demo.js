let sumToV1 = (n) => { //For Loop
	let j = 0;
	for (let i = 0; i <= n; i++ ){
		j += i;
	};
	return j;
};

let sumToV2 = (n) => { //Recursion
	if(n == 1){
		return n;
	}else{
		return n + sumToV2( n - 1 );
	}
}

let sumToV3 = (n) => {
	return (n / 2) * (2 * 1 + (n - 1) * 1)
}

//console.log(sumToV2(100));

console.log(sumToV3(100));
