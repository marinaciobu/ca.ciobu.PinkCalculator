const calculator = new Calculator();
const display = document.querySelector('#display');
const operation = document.querySelector('#operation');
const symbols = { '*': '×', '/': '÷', '-': '−', '+': '+' };
function press(key) {
  calculator.input(key);
  display.textContent = calculator.display;
  operation.textContent = calculator.display === 'Error' ? 'Cannot divide by zero or exceed the number limit' :
    calculator.operator ? `${calculator.left} ${symbols[calculator.operator]}` : 'Ready when you are';
}
document.querySelector('.keys').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (button) press(button.dataset.key);
});
document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  // Let Enter/Space activate a focused button through native browser behavior.
  if (event.target.closest('button') && ['Enter', ' '].includes(event.key)) return;
  const key = { Enter: '=', Escape: 'clear', Backspace: 'backspace', Delete: 'clear' }[event.key] || event.key;
  if (/^[0-9.+*/=-]$/.test(key) || ['clear', 'backspace'].includes(key)) {
    event.preventDefault(); press(key);
  }
});
