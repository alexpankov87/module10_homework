//Task10.3 Boolean type and branching 2.Second Task
let y;
let x = prompt('Введите тип данных Х(number, string): Для проверки логического типа(true or false)');
y = parseInt(x);
if(x.toLowerCase() === "true" || x.toLowerCase() === "false"){
  console.log("Х - логическое значение");
} else if(isNaN(y)){
  console.log("Х - строковое значение");
} else if(typeof(y) === "number"){
  console.log("Х - числовое значение");
} else  {
  console.log("Тип x не определён");
}