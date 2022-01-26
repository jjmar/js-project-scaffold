const { helloWorld } = require('./code')

test('hello world', () => {
  expect(helloWorld()).toBe('Hello World!')
})