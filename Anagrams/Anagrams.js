var arr1 = function(a,b){
	var str1 = a.toLowerCase().replace(/\W/g,"").split("").sort().join("");
	console.log(str1)
	var str2 = b.toLowerCase().replace(/\W/g,"").split("").sort().join("");
	console.log(str2)
	console.log(str1 == str2)
	return str1 == str2;
}
// var arr2 = function(){

// }

arr1('sitambas','ITAMSABS');
arr1('sit','ITAMSABS');
arr1('sit!!','TIS');