//Sum of all numbers in an array using Arrow Function//
let arr = [1,2,3,4,5];
let sum = 0;
let sumof = (arr)=>{
    for(let i=0; i<arr.length; i+=1){
        sum += arr[i];
        }
        return sum
    }
    console.log(sumof(arr));