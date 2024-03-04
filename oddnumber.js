// Print ODD numbers in an array using Anonymous function and IIFE function

//...........Print ODD numbers in an array using Anonymous function............../

let number = [1, 2, 3, 4, 5];
let numbers = [];

let findoddnum = function(number){
    for(let i=0; i<number.length; i++){
        if(number[i]%2 !==0){
        numbers.push(number[i]);
        }
    }
    console.log(numbers.join(' '));
}
findoddnum(number);

//...........Print ODD numbers in an array using IIFE function............../

((number)=>{
    for(let i=0; i<number.length; i++){
        if(number[i]%2 !==0){
            numbers.push(number[i]);
        }
    }
    console.log(numbers.join(' '));
})(number);

//...........Print ODD numbers in an array using Arrow function............../

let oddnum = (number) =>{
    for(let i=0; i<number.length; i++){
        if(number[i]%2 !==0){
            numbers.push(number[i]);
        }
    }
    console.log(numbers.join(' '));    
} 
oddnum(number);

//...........Print ODD and Even numbers in an array using function..............//
let num = [1, 2, 3, 4, 5];
let oddNum = [];
let evenNum = [];

function findNum(num){
    for(let i=0; i<num.length; i++){
        if(num[i]%2 !==0){
            oddNum.push(num[i]);
        }else{
            evenNum.push(num[i]);
        }
    }
    console.log("ODD Number is:"+  oddNum.join(' '));
    console.log("Even Number is:"+ evenNum.join(' '));
} 
findNum(num);