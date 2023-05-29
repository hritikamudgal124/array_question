const arr = ["mango","peers","grapes","papaya"];
const fiveLength = (arr) => {
    return arr.filter(arr => arr.length<=5);
}
console.log(fiveLength(arr));