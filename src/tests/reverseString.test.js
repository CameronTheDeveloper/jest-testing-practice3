const reverseString = require('../modules/reverseString');

test('Reverses single word', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('Reverse words with spaces', () => {
    expect(reverseString('Hello world ')).toBe(' dlrow olleH');
});

test('Reverse single character string', () => {
    expect(reverseString('H')).toBe('H');
});

test('Reverse empty string', () => {
    expect(reverseString('')).toBe('');
});