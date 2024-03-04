//.Print ODD numbers in an array using Arrow function./
let number = [1, 2, 3, 4, 5];
let numbers = [];
let oddnum = (number) =>{
    for(let i=0; i<number.length; i++){
        if(number[i]%2 !==0){
            numbers.push(numbers[i]);
        }
    }
    console.log(numbers.join(' '));    
} 
oddnum(number);