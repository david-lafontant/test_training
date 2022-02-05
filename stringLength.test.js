const stringLength = require('./stringLength');

test('"Hello" length = 5', () => {
    expect(stringLength('Hello')).toBe(5);
  });
  
  test('the string is at less than 1 character long', () => {
    expect(stringLength('')).toBe('String is empty');
  });
  
  test('the string is longer than 10 characters', () => {
    expect(stringLength('asdfghjklqwertyuiop')).toBe('String length is to long');
  });

  test('the string is undigined', () => {
    expect(stringLength()).toBe("String undefined");
  });


