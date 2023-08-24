const calculator = require('../modules/calculator');

const superCalculator = calculator();

/* Addition */

test('Add two positive integers', () => {
    expect(superCalculator.add(22, 30)).toBe(52);
});

test('Add two negative integers', () => {
    expect(superCalculator.add(-22, -30)).toBe(-52);
});

test('Add two positive floating points', () => {
    expect(superCalculator.add(3.5, 5.5000)).toBe(9);
});

test('Add positive and negative floating points', () => {
    expect(superCalculator.add(3.5, -5.5000)).toBe(-2);
});

test('Add positive integer and negative floating point', () => {
    expect(superCalculator.add(3, -5.5000)).toBe(-2.5);
});

/* Subtraction */

test('Subtract two positive integers', () => {
    expect(superCalculator.subtract(22, 30)).toBe(-8);
});

test('subtract two positive floating points', () => {
    expect(superCalculator.subtract(3.5, 5.5000)).toBe(-2);
});

test('Subtract two negative integers', () => {
    expect(superCalculator.subtract(-22, -30)).toBe(8);
});

test('Subtract positive and negative floating points', () => {
    expect(superCalculator.subtract(3.5, -5.5000)).toBe(9);
});

test('Subtract positive integer and negative floating point', () => {
    expect(superCalculator.subtract(3, -5.5000)).toBe(8.5);
});

/* Multiply */

test('Multiply two positive integers', () => {
    expect(superCalculator.multiply(22, 30)).toBe(660);
});

test('Multiply two negative integers', () => {
    expect(superCalculator.multiply(-22, -30)).toBe(660);
});

test('Multiply two positive floating points', () => {
    expect(superCalculator.multiply(3.5, 5.5000)).toBe(19.25);
});

test('Multiply positive and negative floating points', () => {
    expect(superCalculator.multiply(3.5, -5.5000)).toBe(-19.25);
});

test('Multiply positive integer and negative floating point', () => {
    expect(superCalculator.multiply(3, -5.5000)).toBe(-16.5);
});

/* Division */

test('Divide two positive integers', () => {
    expect(superCalculator.divide(10, 5)).toBe(2);
});

test('Divide two negative integers', () => {
    expect(superCalculator.divide(-10, -2)).toBe(5);
});

test('Divide two positive floating points', () => {
    expect(superCalculator.divide(7.5, 1.5000)).toBe(5);
});

test('Divide positive and negative floating points', () => {
    expect(superCalculator.divide(7.5, -1.5000)).toBe(-5);
});

test('Divide positive integer and negative floating point', () => {
    expect(superCalculator.divide(10, -2.5)).toBe(-4);
});