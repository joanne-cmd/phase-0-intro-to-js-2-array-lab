// Write your solution here!
let cats=['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let joannesCats = [...cats];
    joannesCats.push(name);
    return joannesCats;
}
function prependCat(name){
    let joannesCats = [...cats];
    joannesCats.unshift(name);
    return joannesCats;
}
function removeLastCat(){
    let joannesCats = [...cats];
    joannesCats.pop();
    return joannesCats;
}
function removeFirstCat(){
    let joannesCats = [...cats];
    joannesCats.shift();
    return joannesCats;
}