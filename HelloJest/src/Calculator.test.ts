import calculate from '../src/Calculator';

describe('calculate', function() {
  it('add', function() {
    let result = calculate(5, 2);
    expect(result).toBe(7);
  });
});
