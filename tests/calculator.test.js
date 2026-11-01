const test = require('node:test');
const assert = require('node:assert/strict');
const Calculator = require('../calculator.js');
function run(keys) { const c = new Calculator(); keys.forEach(k => c.input(k)); return c; }
for (const [name, keys, expected] of [
  ['addition', ['2', '+', '3', '='], '5'],
  ['subtraction', ['2', '-', '3', '='], '-1'],
  ['multiplication', ['6', '*', '7', '='], '42'],
  ['division', ['9', '/', '2', '='], '4.5'],
  ['decimal rounding', ['0', '.', '1', '+', '0', '.', '2', '='], '0.3'],
  ['duplicate decimal', ['.', '.', '5'], '0.5'],
  ['left to right chaining', ['2', '+', '3', '*', '4', '='], '20'],
  ['replace operator', ['2', '+', '*', '3', '='], '6'],
  ['negative operand', ['5', '+', 'sign', '2', '='], '3'],
  ['backspace', ['1', '2', 'backspace'], '1'],
  ['clear resets operation', ['9', '+', 'clear', '2', '='], '2'],
  ['zero division', ['8', '/', '0', '='], 'Error'],
  ['recover from error', ['8', '/', '0', '=', '4'], '4'],
  ['new entry after equals', ['2', '+', '3', '=', '8'], '8'],
  ['continue result', ['2', '+', '3', '=', '*', '2', '='], '10'],
  ['repeated equals does nothing', ['2', '+', '3', '=', '='], '5'],
  ['missing operand cancels', ['2', '+', '='], '2'],
  ['input length limit', Array(20).fill('9'), '999999999999']
]) test(name, () => assert.equal(run(keys).display, expected));
