function spy(fn){
	function wrapper(...args){
		wrapper.calls.push(args)
		return fn.apply(this, args);
	}

	wrapper.calls = [];

	return wrapper;
}

function delay(fn, ms){
	return function(...args){
		setTimeout(() => fn.apply(this, args), ms);
	}
}

let debounce = function(fn, ms){
	let timeoutId;
	return function(...args){
		clearTimeout(timeoutId);
		timeoutId = setTimeout(()=> fn.apply(this, args), ms);

	}
}


  function throttle(fn, ms){

    let currThis, currArgs, block = false;

    return function wrapper(){

      if(block){
      currThis = this;
      currArgs = arguments;
      return;
      }

        fn.apply(this, arguments);
        block = true;

        setTimeout(() => {
          block = false
            if(currArgs){
              wrapper.apply(currThis, currArgs);
              currThis, currArgs = null;
            }
          }, ms)

    }

  }
