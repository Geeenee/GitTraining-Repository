function spy(fn){
	function wrapper(...args){
		wrapper.calls.push(args)
		return fn.apply(this, args);
	}

	wrapper.calls = [];

	return wrapper;
}
