const capitalize = (word = 'hello') => {
    let firstLetter = word.replace(/\s/g, '').charAt(0).toUpperCase();
    let remainingLetters = word.slice(1);
    return firstLetter + remainingLetters;
};

module.exports = capitalize;