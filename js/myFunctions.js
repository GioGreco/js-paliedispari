//Questa funzione restituisce 'true' se la parola inserita è palindroma;
let isPalindrome = function(string){
    let invertedString = string.split('').reverse().join('');
    console.log(invertedString);
    if(string == invertedString){
        return true;
    }
};

let randomBetween = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let isEven = function(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
};