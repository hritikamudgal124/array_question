let arr = ["apple", "mango", "apple",
		"orange", "mango", "mango"];

const removeDuplicates = (arr)=> {
	return arr.filter((item,index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
