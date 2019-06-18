let method1 = function(arr){
	let word = arr.split(" ");
	let result = word.map(function(val){
		let value =  val.replace(val.charAt(0), val.charAt(0).toUpperCase());

		return value;
	})
	return result.join(" ")
}
console.log(
	method1('sitambas patel'),
)