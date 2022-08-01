//Task10.3 Boolean type and branching. First Task
let num = +prompt("Введите число");
if(typeof num === "number" && !Number.isNaN(num)) {
  if ( num %2 === 0) {
    console.log("это чётное число");
  }  else {
   console.log("Это нечётное число"); } 
  }
 else  {
  console.log ("Упс, кажется, вы ошиблись");
 }