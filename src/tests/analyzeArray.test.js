const analyzeAr = require('../modules/analyzeArray');

const testAr = analyzeAr();

test('Get the average of an array', () => {
    expect(testAr.getAverage([5, 2, 3, 1, 9, 0, 8])).toBe(4);
});

test('get the length of an array', () => {
    expect(testAr.getLength([5, 2, 3, 1, 9, 0, 8])).toBe(7);
});