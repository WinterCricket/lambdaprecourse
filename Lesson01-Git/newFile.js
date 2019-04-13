
function memoize(fn){
	const cache = {};
	return function(...args){ //anonymous func
		if(cache[args]){
			return cache[args];
		}
		const results = fn.apply(this, args);
		cache[args] = results;
		return results;
	};
}

function slowFib(n){
	if(n < 2){
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);
fib(8);