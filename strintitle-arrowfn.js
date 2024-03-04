//.Convert all the strings to title caps in a string array using Arrow function.//

let convertstr = (word)=>{
    for(let i=0; i<word.length; i++){
        names.push(word[i].toUpperCase());
    }
    console.log(names.join(' '));
}
convertstr(word);

