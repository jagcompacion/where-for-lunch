
import {
  getRandom,
  tConvert,
  insertStr,
} from 'client/lib/utils';

describe('getRandom', () => {
  test('returns null when passed in an empty list', () => {
    expect(getRandom([])).toBe(null);
  });
  test('returns null when passed in null', () => {
    expect(getRandom()).toBe(null);
  });
});

describe('insertStr', () => {
  test('returns 13:00 when passed parameters of "1300", "2", ":"', () => {
    expect(insertStr('1300', '2', ':')).toBe('13:00');
  });
  test('returns empty string when no parameter passed', () => {
    expect(insertStr()).toBe(null);
  });
});

describe('tConvert', () => {
  test('returns 1:00PM when passed in "13:00" string', () => {
    expect(tConvert('13:00')).toEqual('1:00PM');
  });
  test('returns empty string when no parameter passed', () => {
    expect(tConvert()).toBe(null);
  });
});
