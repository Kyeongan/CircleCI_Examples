const { sum, prod } = require('./examples');

test('add 1+2 to be equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('add 10+2 to be equal 20', () => {
    expect(prod(10, 2)).toBe(20);
});
