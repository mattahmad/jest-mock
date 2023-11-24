import sum, { concat } from './../pages/goToMockImplementation';

jest.mock('./../pages/goToMockImplementation');

describe('lib', () => {
  it('sum', () => {
    sum.mockImplementation(() => 2);
    expect(sum()).toBe(2);
  });

  it('concat', () => {
    concat.mockImplementation(() => 'a');
    expect(concat()).toBe('a');
  });
});