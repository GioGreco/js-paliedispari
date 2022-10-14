//Questa funzione restituisce 'true' se la parola inserita è palindroma;
let isPalindrome = function(string){
    let invertedString = string.split('').reverse().join('');
    console.log(invertedString);
    if(string == invertedString){
        return true;
    }
};