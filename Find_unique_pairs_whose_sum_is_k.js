// Question: Write a function that takes two parameters as array (arr) and number(k), 
// where you need to find unique pair among the array where the combination of any two number is a K.
// Ex: 
// var arr = [1,3,5,5,7,9];
// var k = 10;
// findUniquePair(a,k)  
//[1,9], [3,7], [5,5]   ----output


// Soution:
const findUniquePair=(arr, k)=>{
	let returnedArr=[];
	for (let i=0; i < arr.length; i++){
		for (let j=i+1; j< arr.length; j++){
			if (arr[i] + arr[j] == k){
				returnedArr.push([arr[i], arr[j]])
			}
		}
	}
  return returnedArr;
}