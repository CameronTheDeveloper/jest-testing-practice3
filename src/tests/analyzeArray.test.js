const analyzeAr = require('../modules/analyzeArray');

const testAr = analyzeAr();

test('Get the average of an array', () => {
    expect(testAr.getAverage([5, 2, 3, 1, 9, 0, 8])).toBe(4);
});

test('Get the length of an array', () => {
    expect(testAr.getLength([5, 2, 3, 1, 9, 0, 8])).toBe(7);
});

test('Sort an array with over 3 numbers', () => {
    expect(testAr.mergeSort([110, 5, 2, 25, 1, 3, 205, 9, 0, 8, 105])).toEqual([0, 1, 2, 3, 5, 8, 9, 25, 105, 110, 205]);
});

test('Sort an array with 3 numbers', () => {
    expect(testAr.mergeSort([110, 5, 2])).toEqual([2, 5, 110]);
});

test('Sort an array with 2 numbers', () => {
    expect(testAr.mergeSort([5, 2])).toEqual([2, 5]);
});

test('Sort an array with 1 number', () => {
    expect(testAr.mergeSort([5])).toEqual([5]);
});