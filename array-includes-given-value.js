const arr = [2,1,5,9,10];
let value = 10;
const arrayIncludesGivenValue = (arr,value) =>{
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==value){
            return true;
        }
     }
        return false;
}
console.log(arrayIncludesGivenValue(arr,value));
