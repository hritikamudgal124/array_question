let arr = [2,4,6,3,5,8];
const removeEvenArr = (arr) =>{
    const newAarry = arr.filter(Element=>Element%2!==0);
    return newAarry;
}
console.log(removeEvenArr(arr));