//10.6. Cycles. First Task
const arrLang = ['C#', 'JavaScript', 'Vue', 'React'];

function checkedArr(arr, item) {
  return arr.some(function(arrItem) {
    return item === arrItem;
  });
}

console.log(checkedArr(arrLang, 'PHP')); // false
console.log(checkedArr(arrLang, 'Vue')); // true
