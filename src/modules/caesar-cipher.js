const alphabetAr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];

const getShift = (letter, shiftNum) => {
    let alphabetArShift = (alphabetAr.indexOf(letter.toLowerCase()) + shiftNum);
    if (alphabetArShift > alphabetAr.length) {
        alphabetArShift %= alphabetAr.length;
    }
    return alphabetArShift;
};

const getLetter = (letter, alphabetArShift) => {
    let shiftedLetter = alphabetAr[alphabetArShift];
    if (letter === letter.toUpperCase()) {
        shiftedLetter = shiftedLetter.toUpperCase();
    }
    return shiftedLetter;
};

const caesarCipher = (word = '', shiftNum) => {
    let wordAr = word.split('');
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (!wordAr[i].match(/[A-Za-z]/)) {
            newWord += wordAr[i];
        } else {
            let alphabetArShift = getShift(wordAr[i], shiftNum);
            newWord += getLetter(wordAr[i], alphabetArShift);
        }
    }
    return newWord;
};

module.exports = caesarCipher

