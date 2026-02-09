
let n = 10
outerLoop: for(let i = 2; i <= n; i++){
	for(let j = 2; j < i; j++ ){
		
		if(i % j == 0) continue outerLoop;
		

	}	
	console.log(i);
};

//let i = 0
//while(i < 3){
//	console.log(`number ${i}!`)
//	i++
//}
//let answer
//while(answer <= 100 || answer === null){
//	prompt('Input a number greater than one hundred', null)
//	
//}

