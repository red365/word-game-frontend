function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function getLetter(letterType) {
  // const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p","q", "r", "s", "t", "v", "w", "x", "y", "z"];
  const consonantsArray1 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "w", "y"];
  const consonantsArray2 = ["q", "v", "x", "z"];
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let letter;
  let consonantArrayNumber; 
  const numOfConsonantArrays = 2;

  if (letterType === "Consonant") {
    consonantArrayNumber = getRandomNumber(numOfConsonantArrays)
    if ( consonantArrayNumber < 2 ) {
      letter = consonantsArray1[ getRandomNumber(consonantsArray1.length) ];
    } else {
      letter = consonantsArray2[ getRandomNumber(consonantsArray2.length) ];
    }
  } else { 
    letter = vowelsArray[ getRandomNumber( vowelsArray.length) ];
  }

  return letter.toUpperCase();
}

function countDownTimer() {
  const timeDisplay = document.querySelector('.timer');
  let secondsLeft = 59;
  let intervalsSoFar = 1;
  const maxIntervals = 60;

  setInterval( function () {
    timeDisplay.textContent = ( secondsLeft < 10 ) ? "00:00:0" + secondsLeft : "00:00:" + secondsLeft;;
    secondsLeft = secondsLeft - 1;
    if (intervalsSoFar == maxIntervals) {
      clearInterval(1);
    }
    intervalsSoFar += 1;
  }, 1000);  
}

function displayCharArray() {
  charArray.forEach( function ( char, index) {
    tableCell = document.querySelector(".cell" + index);
    tableCell.textContent = char;
  });
}

const charArray = []; 

const buttonList = document.querySelectorAll('.get-letter');
buttonList.forEach( function (button) {
  button.addEventListener( 'click', function () {
    const letter = getLetter(button.textContent);
    
    charArray.push(letter);
    displayCharArray();

    if ( charArray.length === 9 ) { 
      buttonList.forEach( function (button) {
        button.disabled = true;
      });

      countDownTimer(); }
  });
});





// while (secondsLeft >= 0) {
//   setInterval(function () {
//     alert(secondsLeft);
//     // timeDisplay.textContent = toString(secondsLeft);
//   }, 5000);
//   secondsLeft = secondsLeft - 1;
// }
