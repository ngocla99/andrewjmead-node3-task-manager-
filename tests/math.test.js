/**
 * Why test?
 * Save time
 * Creates reliable software
 * Give flexibility to developes: refactoring, collaborating, profiling
 * Peace of mind
 */

const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Should convert 32 F to 0 C", () => {
  const result = fahrenheitToCelsius(32);
  expect(result).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const result = celsiusToFahrenheit(0);
  expect(result).toBe(32);
});

