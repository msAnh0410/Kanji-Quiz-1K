// THE AREA WHEARE THE　KANJI
const kanji = document.querySelector('.kanji');

// THE AREA WHERE THE USER TYPES THE ROMAJI
const input = document.getElementById('input');

// THE BUTTON THE USER CLICKS TO CHECKS THEIR ANSWER

const check = document.getElementById('check');

const kanjiObj = {
    jin: "人",
    shin: "新",
    eki: "駅",
    den: "電",
    uchi: "家",
    sha: "車",
    ai: "愛"
}

console.log(kanjiObj.den);
const kanjiValue = Object.values(kanjiObj);

console.log(kanjiValue);

const kanjiKey = Object.keys(kanjiObj);
console.log(kanjiKey[3]);

let counter = 0;
let nowKanji = kanjiValue[counter];
let nowRomaji = kanjiKey[counter];

check.addEventListener('click', function(){
    
    if(input.value == nowRomaji){
        displayCorrect();
        sayCorrect();
    }else{
        displayInCorrect();
    }

    console.log(counter);

});

function displayCorrect(){
    
    counter ++;
    nowKanji = kanjiValue[counter];
    nowRomaji = kanjiKey[counter];

    kanji.innerHTML = nowKanji;
    input.value = '';
    
    
}

function displayInCorrect(){
    kanji.innerHTML = "Wrong";
    setTimeout(function(){
        kanji.innerHTML = nowKanji;
    },1000)
}

function sayCorrect(){
    if(counter < kanjiValue.length){
        kanji.innerHTML = 'Correct!'
        setTimeout(function(){
            kanji.innerHTML = nowKanji;
        }, 1000);
    }
    else{
        kanji.innerHTML = "Good Luck with JLPT N1!";
    }
}

console.log(kanji);
console.log(input);
console.log(check);