const { sum, prod, pow } = require('./examples');

test('add 1+2 to be equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('add 10*2 to be equal 20', () => {
    expect(prod(10, 2)).toBe(20);
});

test('pow (10, 2) to be equal 100', () => {
    expect(pow(10, 2)).toBe(100);
});
