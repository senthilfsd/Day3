//Print Sum of all numbers in an array using Anonymous & IIFE Function

//.................Anonymous Function...................//
let arr = [1,2,3,4,5];
let sum = 0;
let sumof = function (arr){
    for(let i=0; i<arr.length; i+=1){
        sum += arr[i];
        }
        return sum
    }
    console.log(sumof(arr));


//.................IIFE Function.......................//

((arr)=>{
    for(let i=0; i<arr.length; i+=1){
        sum += arr[i];
        }
        console.log(sum);
    })(arr);

//.................Arrow Function.......................//
let sumof = (arr)=>{
    for(let i=0; i<arr.length; i+=1){
        sum += arr[i];
        }
        return sum
    }
    console.log(sumof(arr));

    