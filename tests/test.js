const lib = require('../esm/index.js');

test('Test allCaps', () => {
  expect("hello".allCaps()).toBe("HELLO");
});
