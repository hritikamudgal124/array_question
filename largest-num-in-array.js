const arr = [12,45,23,67,100,1];
let largestNum = "";
const printLargestNum = (arr) => {
    const sortedArr = arr.sort((a,b)=> b-a);
    return sortedArr[0];
}
console.log(printLargestNum(arr));