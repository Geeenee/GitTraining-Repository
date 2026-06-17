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
