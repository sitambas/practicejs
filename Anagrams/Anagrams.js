var arr1 = function (a, b) {
	var str1 = a.toLowerCase().replace(/\W/g, "").split("").sort().join("");
	console.log(str1)
	var str2 = b.toLowerCase().replace(/\W/g, "").split("").sort().join("");
	console.log(str2)
	console.log(str1 == str2)
	return str1 == str2;
}
// metthod two
var arr2 = function (a, b) {
	let objAns = {}
	let aKey = a.toLowerCase().replace(/\W/g, "");
	let bKey = b.toLowerCase().replace(/\W/g, "");
	for (let i=0; i < aKey.length; i++) {
		let char = aKey[i];
		if (char in objAns) {
			objAns[char]++;
		} else {
			objAns[char] = 1;
		}
	}
	for (let i=0; i < bKey.length; i++) {
		let char = bKey[i];
		if (char in objAns) {
			objAns[char]--;
		} else {
			return false;
		}
	}
	for (let key in objAns) {
		if (objAns[key]) {
			return false
		}
	}
	return true;
}
console.log(
	arr2('sitambas', 'ITAMSABS'),  // TRUE
	arr2('sit', 'ITAMSABS'), // FALSE
	arr2('sit!!', 'TIS') // TRUE
)