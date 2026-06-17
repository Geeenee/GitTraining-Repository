function spy(fn){
	function wrapper(...args){
		let result = fn.apply(this, args)
		wrapper.calls.push(args)
		return result;
	}

	wrapper.calls = [];

	return wrapper;
}
