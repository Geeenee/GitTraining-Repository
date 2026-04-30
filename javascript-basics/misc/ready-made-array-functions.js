  let arr = [1, 2, 3, 4, 5, 6, 7];
  
  function inBetween(a, b) {
    return function(data){
	
    }
  }
  
  function inArray(valuesArr) {
	return function(data){
    		return valuesArr.find( item => item == data) ? true : false; 
	}
  }



console.log(arr.filter(inArray([1, 2 ,3, 10])));
//console.log(arr.filter(inBetween([2, 4])));
