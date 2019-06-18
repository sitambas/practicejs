let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
let method1 = function(n){
	if(arr < 2) return n;
	let [previous, current] = [0, 1];
	for (let i = 1; i < n; i++) {
		[previous, current] = [current, previous + current];
	}

	  return current;
}
console.log(
	method1(9), //43
)