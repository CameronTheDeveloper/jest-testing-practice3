const alphabetAr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];

const caesarCipher = (word = '', shiftNum) => {
    let wordAr = word.split('');
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        newWord += alphabetAr[(alphabetAr.indexOf(wordAr[i]) + shiftNum)];
    }
    return newWord;
};

module.exports = caesarCipher

