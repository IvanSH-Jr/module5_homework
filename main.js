 //1
 /* let inputValue = prompt("Введите значение");
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
     */
//2
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
//3
/*
let inputValue = 'number'
console.log(inputValue.split('').reverse().join(''))
*/
//4
/*let min = Math.ceil(0)
let max = Math.floor(100)
let X = console.log(Math.floor(Math.random() * (max - min + 1)) + min)*/

//5
/*let someArr = ['stroka', 1, 2 ,3 , 'Stroka']
console.log(someArr.length)
for(let i = 0; i < someArr.length; i++){
    console.log(someArr[i])
}*/

//6
/*let someArr = ['Stroka', 'Stroka', 'Stroka' , 'Stroka' , 'Stroka']
let check = true
let firstItem = 'Stroka'
for( let indexArr = 0; indexArr < someArr.length; indexArr++){
    if(firstItem != someArr[indexArr]){
        check = false
    }
}
console.log(check)*/

//7
let someArr = [1, 2, 'privet', 3, 2, null, 6, 0, '-', ' ', '44' ]
let evenCounter = 0
let oddCounter = 0

for(let indexArr = 0; indexArr < someArr.length; indexArr++){
    if(someArr[indexArr] % 2 == 0 && someArr[indexArr]!= 0 && someArr[indexArr] != null){
        evenCounter++
    }else{
        oddCounter++
    }if (someArr[indexArr] === null) {
        console.log(indexArr + ' Is null')
    } 
}
console.log('Even = ' + evenCounter)
console.log('Odd = ' + oddCounter)