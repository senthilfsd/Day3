// Convert all the strings to title caps in a string array using Anonymous function & IIFE

//...............Anonymous function..........//

let word = ["senthil", "kumar" ];
let names = [];

let convertstr = function(word){
    for(let i=0; i<word.length; i++){
        names.push(word[i].toUpperCase());
    }
    console.log(names.join(' '));
}
convertstr(word);


//...............IIFE function................//

((word)=>{
    for(let i=0; i<word.length; i++){
        names.push(word[i].toUpperCase());
    }
    console.log(names.join(' '));
})convertstr(word);

;

