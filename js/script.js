"use strict";

const nextBtn = document.querySelector('.next');
nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
const leftWorkspace = document.querySelector('.container');
const rightWorkspace = document.querySelector('.container2');


nextBtn.addEventListener('mouseover', function(){
    nextBtn.classList.add('purple');
    nextBtn.addEventListener('mouseout', function(){
        nextBtn.classList.remove('purple');
    })
})

function toRightWorkspace(){
    nextBtn.classList.toggle('invert');
    rightWorkspace.classList.toggle('opacity-0');
    leftWorkspace.classList.toggle('opacity-0');
};

nextBtn.addEventListener('click', toRightWorkspace);


// FIRST EXERCISE
const btn1 = document.getElementById('btnPal');
const input1 = document.getElementById('inputPal');
const result1HTML = document.getElementById('result1');

function checkPal (){
    let value1 = input1.value;
    if(isPalindrome(value1)){
        result1HTML.innerHTML = `"${value1}" è PALINDROMO`
    }
    else{
        result1HTML.innerHTML = `NON È PALINDROMO`
    }
}

btn1.addEventListener('click', checkPal);

//SECOND EXERCISE

const input2 = document.getElementById('inputVal');
const oddEvenHTML = document.getElementById('odd-evenHTML');
const btn2 = document.getElementById('btnVal');
const selectHTML = document.querySelector('select');
const pcBox = document.getElementById('pcNum');
const totSum = document.querySelector('.totSum');
const result2HTML = document.getElementById('result2');

function gamblePC(){
    let pcNum = randomBetween(1,5);
    let myNum = parseInt(input2.value);
    if(myNum > 5){
        removeFirstNotification();
        result2HTML.append(notifyError('Devi inserire un numero da 1 a 5!'));
    }
    else{
        let oddEven = oddEvenHTML.value;
    pcBox.innerHTML = `${pcNum}`;
    let sum = pcNum + myNum;
    totSum.innerHTML = `TOTALE : ${sum}`;
    console.log(sum);
    console.log(oddEven);
    if(isEven(sum) && oddEven == 'even'){
        result2HTML.innerHTML = `HAI INDOVINATO`;
    }
    else if(isEven(sum) && oddEven == 'odd'){
        result2HTML.innerHTML = `SBAGLIATO`;
    }
    else if(!(isEven(sum)) && oddEven == 'even'){
        result2HTML.innerHTML = `SBAGLIATO`;
    }
    else if(!(isEven(sum)) && oddEven == 'odd'){
        result2HTML.innerHTML = `HAI INDOVINATO`;
    }
    }
    // let oddEven = oddEvenHTML.value;
    // pcBox.innerHTML = `${pcNum}`;
    // let sum = pcNum + myNum;
    // totSum.innerHTML = `TOTALE : ${sum}`;
    // console.log(sum);
    // console.log(oddEven);
    // if(isEven(sum) && oddEven == 'even'){
    //     result2HTML.innerHTML = `HAI INDOVINATO`;
    // }
    // else if(isEven(sum) && oddEven == 'odd'){
    //     result2HTML.innerHTML = `SBAGLIATO`;
    // }
    // else if(!(isEven(sum)) && oddEven == 'even'){
    //     result2HTML.innerHTML = `SBAGLIATO`;
    // }
    // else if(!(isEven(sum)) && oddEven == 'odd'){
    //     result2HTML.innerHTML = `HAI INDOVINATO`;
    // }
}

btn2.addEventListener('click', gamblePC);