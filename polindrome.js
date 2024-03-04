//Return all the palindromes in an array using Anonymous & IIFE function

//................Anonymous Funcion......................//

let word = ["senthil", "kumar", "sam"];
let polindrom = [];

let ispolinrome = function(word){
    if(word === word.split('').reverse().join(' ')){
        return true;
    }else {
        return false;
    }
}
function findpolindromes(word){
    for(let word of words){
        if(ispolinrome(word)){
            polindrom.push(word);
        }
    }
    return polindrom;
}
console.log(polindrom);

//.....................IIFE function.................//

((word)=>{
    if(word === word.split('').reverse().join(' ')){
        return true;
    }else {
        return false;
    }
}
function findpolindromes(word){
    for(let word of words){
        if(ispolinrome(word)){
            polindrom.push(word);
        }
    }
    return polindrom;
})console.log(polindrom);

//.....................Arrow function.................//

let polindrome=(word)=>{
    if(word === word.split('').reverse().join(' ')){
        return true;
    }else {
        return false;
    }
}
function findpolindromes(word){
    for(let word of words){
        if(ispolinrome(word)){
            polindrom.push(word);
        }
    }
    return polindrom;
})console.log(polindrom);
