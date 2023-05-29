const arr = [1,2,3,4,5];
const sumArr = (arr) =>{
    return arr.reduce((sum,number)=>sum+number);
}
console.log(sumArr(arr));