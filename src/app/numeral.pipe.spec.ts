import { NumeralPipe } from './numeral.pipe';

describe('NumeralPipe', () => {
  const pipe = new NumeralPipe();

  it('transforms 1024 in 1 KB', () => {
    expect(pipe.transform(1024, '0 b')).toBe('1 KB');
  });

  it('transforms 234234234 in 234.23 MB', () => {
    expect(pipe.transform(234234234, '0.00 b')).toBe('234.23 MB');
  });
});
