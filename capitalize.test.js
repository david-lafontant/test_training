const capitalize = require('./capitalize');

test('"bambou" should return "Bambou"', () => {
    expect(capitalize('bambou')).toBe('Bambou');
  });