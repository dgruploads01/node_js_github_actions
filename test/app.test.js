const { add, greet } = require('../app');

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('greets properly', () => {
  expect(greet("Rabi")).toBe("Hello, Rabi!");
});
