/* Shared by the browser and Node tests; no expression evaluation. */
(function (root) {
  class Calculator {
    constructor() { this.clear(); }
    clear() { this.display = '0'; this.left = null; this.operator = null; this.fresh = true; }
    result(value) {
      this.display = Number.isFinite(value) ? String(Number(value.toPrecision(12))) : 'Error';
      this.fresh = true;
    }
    input(key) {
      if (key === 'clear') { this.clear(); return; }
      if (this.display === 'Error') this.clear();
      if (/^[0-9.]$/.test(key)) {
        if (this.fresh) { this.display = key === '.' ? '0.' : key; this.fresh = false; }
        else if (key === '.') { if (!this.display.includes('.')) this.display += '.'; }
        else if (this.display.replace(/[-.]/g, '').length < 12) {
          this.display = this.display === '0' ? key : this.display === '-0' ? '-' + key : this.display + key;
        }
        return;
      }
      if (key === 'backspace') {
        if (!this.fresh) this.display = this.display.slice(0, -1).replace(/^-$|^$/, '0');
        return;
      }
      if (key === 'sign') {
        if (this.fresh && this.operator) { this.display = '-0'; this.fresh = false; }
        else this.display = this.display.startsWith('-') ? this.display.slice(1) : '-' + this.display;
        return;
      }
      if (!['+', '-', '*', '/', '='].includes(key)) return;
      if (this.operator && !this.fresh) {
        const right = Number(this.display);
        const values = { '+': () => this.left + right, '-': () => this.left - right,
          '*': () => this.left * right, '/': () => right === 0 ? NaN : this.left / right };
        this.result(values[this.operator]());
        this.operator = null;
        if (this.display === 'Error') { this.left = null; return; }
      }
      if (key === '=') { this.operator = null; this.left = null; this.fresh = true; }
      else { this.left = Number(this.display); this.operator = key; this.fresh = true; }
    }
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = Calculator;
  else root.Calculator = Calculator;
})(typeof globalThis !== 'undefined' ? globalThis : this);
