const capitalize = require('../modules/capitalize');

test('Capitalizes first letter', () => {
    expect(capitalize('word')).toBe('Word');
});

test('Capitalizes first letter when there are spaces', () => {
    expect(capitalize('hello world! ')).toBe('Hello world! ');
});

test('First letter is already capital', () => {
    expect(capitalize('Hello world!')).toBe('Hello world!');
});