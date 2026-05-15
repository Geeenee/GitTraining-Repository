  function makeArmy() {
    let shooters = [];
  
    let i = 0;

    while (i < 10) {
	let a = i;
      let shooter = function() { // shooter function
	     	console.log(a);	
      };
      shooters.push(shooter);
      i++
    }
  
    return shooters;
  }

let army = makeArmy();
//console.log(army);
army[5]();
army[8]();
