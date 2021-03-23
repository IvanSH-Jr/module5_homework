 //Убрать комментарий мне показалось лучше, чем создавать 8 файлов
 //Задание 1
let inputValue = prompt("Введите значение");
inputValue = +inputValue;
console.log(inputValue)
console.log(typeof(inputValue))


if( typeof(inputValue) == "number" && !isNaN(inputValue))
{
    let inputValueParity = inputValue % 2
    console.log(inputValueParity)
        if(inputValueParity == 0){
            console.log("Parity is even")
        } else{
            console.log("Parity is odd")
        }
    } else if(isNaN(inputValue)){
    console.log("Вы ввели NaN")
} 
    
//Задание 2
/*
let X = .8
console.log(typeof(X))
switch(typeof(X)){
    case 'number':
        console.log("X - number")
        break;
    case 'string':
        console.log("X - string")
        break;
    case 'boolean':
        console.log("X - boolean")
        break;
    default:
        console.log ("X - undefiend")
}
*/
//Задание 3
/*
let inputValue = 'number'
console.log(inputValue.split('').reverse().join(''))
*/
//Задание 4
/*let min = Math.ceil(0)
let max = Math.floor(100)
let X = console.log(Math.floor(Math.random() * (max - min + 1)) + min)*/

//Задание 5
/*let someArr = ['stroka', 1, 2 ,3 , 'Stroka']
console.log(someArr.length)
for(let i = 0; i < someArr.length; i++){
    console.log(someArr[i])
}*/

//Задание 6
/*let someArr = ['Stroka', 'Stroka', 'Stroka' , 'Stroka' , 'Stroka']
let check = true
let firstItem = 'Stroka'
for( let indexArr = 0; indexArr < someArr.length; indexArr++){
    if(firstItem != someArr[indexArr]){
        check = false
    }
}
console.log(check)*/

//Задание 7
/*let someArr = [1, 2, 'privet', 3, 2, null, 6, 0, '-', '44' ]
let evenCounter = 0
let oddCounter = 0

for(let indexArr = 0; indexArr < someArr.length; indexArr++){
    if(someArr[indexArr] % 2 == 0 && someArr[indexArr]!= 0 && someArr[indexArr] != null){
        evenCounter++
    }else if(someArr[indexArr] % 2 != 0 && someArr[indexArr] != null && !isNaN(someArr[indexArr])){
        oddCounter++
    }
    if (someArr[indexArr] === null) {
        console.log(indexArr + ' Is null')
    } 
}
console.log('Even = ' + evenCounter)
console.log('Odd = ' + oddCounter)*/

//Задание 8
/*
let myMap = new Map([
    [1, 'uno'],
    [2, 'dos'],
    [3, 'tres']
])

for(let keysName of myMap.keys()){
    console.log(`Ключ — ${keysName}, значение — ${myMap.get(keysName)} ` )
}
*/