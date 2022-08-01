//Module.10.4.Strings.Numbers. Second Task
let randomNumber = Math.floor(Math.random() * 101);
let result = randomNumber;
console.log(result);

//10.5. Arrays and basic methods of working with them.
let arr = ['JavaScript', 'is', 'awesome', 'lang'];
console.log(`Количество элементов в массиве: ${arr.length}`);
for(let i = 0, a = arr.length; i< a ; i++){
  console.log(`Элемент массива: ${arr[i]}`);
}