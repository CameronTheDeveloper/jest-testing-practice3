const caesarCipher = require('../modules/caesar-cipher');

test('Shift single letter by 1', () => {
    expect(caesarCipher('a', 1)).toBe('b');
});

test('Shift single letter \'a\' to letter \'z\'', () => {
    expect(caesarCipher('a', 25)).toBe('z');
});

test('Shift single letter by 0', () => {
    expect(caesarCipher('c', 0)).toBe('c');
});

test('Shift entire word by 1', () => {
    expect(caesarCipher('abcfgw', 1)).toBe('bcdghx');
});