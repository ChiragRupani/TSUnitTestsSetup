import diff from 'jest-diff';
import C from '../src/Calculator';

describe('calculate', function() {
  it('add', function() {
    let result = C.Sum(5, 2);
    expect(result).toBe(7);

    const a = { a: { b: { c: 5 } } };
    const b = { a: { b: { c: 6 } } };
    const diffResult = diff(a, b);
    // console.log(diffResult);
  });

  it('substract', function() {
    let result = C.Difference(5, 2);
    expect(result).toBe(3);
  });
});
