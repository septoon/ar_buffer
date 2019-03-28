import { ArrayBufferConverter, getBuffer } from './js/buffer';

const buffer = new ArrayBufferConverter();
buffer.load(getBuffer());
/* eslint-disable no-console */
console.log(buffer);
const result = buffer.toString();
console.log(result);
