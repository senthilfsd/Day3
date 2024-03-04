// Return Polindrome using Arrow function.//
let word = ["senthil", "kumar", "mam", "malayalam", 123, 151];
let polindrom = [];
let findpolindrom=(words)=>{
    for(let word of word){
        if(word === word.slit('').reverse().join('')){
            polindrom.push(word);
        }
    }
    return polindrom;
}
findpolindrom(word);
