//10.7. Associative arrays
let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",    "blue"]
  
  ]);
  
  for(let elem of fruits.keys()) {
      console.log(`Ключ: ${elem} Значение: ${fruits.get(elem)}`)
  }

