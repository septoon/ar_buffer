import { ArrayBufferConverter, getBuffer } from '../src/js/buffer';

test('buffer to string', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());
  const received = buffer.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toEqual(expected);
});
