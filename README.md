# PinkCalculator

A small pink calculator that runs in a browser without installation, accounts, a server, or third-party dependencies.

## Try it

Download this branch as a ZIP, extract it, and open `index.html` in a browser. All assets are local, so it also works offline. For development, optionally run `python3 -m http.server 8000` from this directory and visit http://localhost:8000.

## First-version features

- Addition, subtraction, multiplication and division
- Decimal numbers, sign change, all-clear and backspace
- Responsive pink layout with labeled buttons and visible keyboard focus
- Keyboard digits, decimal point, +, -, *, /, Enter or =, Escape and Backspace
- Division-by-zero error with recovery on the next input

Operations execute left to right: `2 + 3 × 4 = 20`. A new operator replaces a pending operator. Equals without a second operand cancels the pending operation; repeated equals does nothing. Backspace edits only active input. Input is limited to 12 digits; results are rounded to 12 significant digits and may use scientific notation. JavaScript floating-point arithmetic is suitable for everyday calculations, not exact financial accounting.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page and calculator buttons |
| `styles.css` | Responsive pink theme |
| `calculator.js` | Calculation state and arithmetic, independent of the page |
| `app.js` | Button/keyboard input and display updates |
| `tests/calculator.test.js` | Arithmetic and state-transition regression tests |
| `IMPLEMENTATION_PLAN.md` | Repository findings, scope and release checklist |

Run tests with `npm test` using a Node.js installation that supports `node --test`. No `npm install` is required.

## Original repository

The original README contained only the repository name. `PinkCalculator` is a Git **gitlink** (mode 160000), pointing to commit `ce63b80855370938037fa02ec6b2844daa632a29`; it is not an empty source file. There is no `.gitmodules` file, and that commit could not be retrieved from this repository. The pointer is preserved in this branch. It may represent a separately stored native app, but no platform or original implementation can be established from the available contents.

This browser implementation is an explicit starter choice. It does not claim to restore that missing project. No deployment or native app packaging is included.
