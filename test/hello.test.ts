import {sayHello} from '../src/hello';

describe('hello', () => {
  it('should say hello', () => {
    expect(sayHello()).toEqual('hello');
  });
});
