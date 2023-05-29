const a1 = [2, 3, 1, 4, 12];
const a2 = [1, 6, 3, 15, 2];
const returnCommonElements = (a1, a2) => {
  return a1.filter((element) => a2.includes(element));
};
console.log(returnCommonElements(a1, a2));

