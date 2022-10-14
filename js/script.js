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