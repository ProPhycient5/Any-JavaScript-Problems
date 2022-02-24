// Question: Create a function named as duplicate which has two parameters, one is array and 
// other is count(i.e. how many duplicate you want).
// input: duplicate([1,2,3,4,5], 2);

//output: [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]

function duplicate(arr, count){
	const originalLength= arr.length;
	for (let i=0; i < (count * originalLength); i++){
		arr.push(arr[i]);
	}
	return arr;
}

//or better way 👇🏼

function duplicate(arr, count){
	  let newArr = [...arr];
	for (let i=0; i < count; i++){
		newArr.push(...arr);
	}
	return newArr;
}
