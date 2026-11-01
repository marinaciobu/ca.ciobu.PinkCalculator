# PinkCalculator implementation plan

## Evidence and platform choice

Inspected main at `dfae770ca1166b03ab609cf9cfbb4475d07e623a` (March 1, 2026). The tracked tree contains a 25-byte README and a gitlink named PinkCalculator, with no source files, build manifest, .gitmodules, or AGENTS.md. The reverse-domain repository name could be a native application identifier, but is insufficient to distinguish Android, iOS, desktop or another platform. The gitlink target returned 404 in this repository.

Use a static HTML/CSS/JavaScript app for the smallest runnable version. Keep the engine independent from the UI, so a later native interface can reuse the behavior specification. Preserve the unresolved gitlink until its origin is known.

## Implemented in the starter

- [x] Single calculator screen with a pink, responsive design.
- [x] Four operations, decimal entry, sign change, clear and backspace.
- [x] Explicit left-to-right evaluation and predictable operator replacement.
- [x] Error handling for division by zero and non-finite results.
- [x] Mouse, touch and keyboard input; native button semantics and live result output.
- [x] No eval, remote assets, tracking, login, backend or runtime dependencies.
- [x] 18 automated arithmetic/state tests and local launch instructions.

## Before releasing

1. Open index.html in Safari and Chrome, including an actual phone. Confirm all buttons fit at 320px width and at 200% zoom, and that long results remain readable.
2. Check pointer and keyboard flows: 12.5 + 7.5 = 20; 8 / 0 shows Error; typing 4 recovers; Escape resets. Tab through buttons and verify Enter/Space activation and screen-reader result announcements.
3. Confirm whether a browser app meets the intended goal or locate the original PinkCalculator project for a native implementation.
4. Review and merge the draft PR. If public hosting is desired, configure a static host such as GitHub Pages as a separate release step.

Automated engine tests pass. Browser/device and assistive-technology checks above remain manual release work; they have not been verified in this environment.

## Deliberately deferred

Percentage conventions, expression precedence, parentheses, history, themes, persistence, installable/PWA packaging, native app stores and scientific functions. Add only after the basic calculator has been tried by a user. No credentials or external services are needed for this version.
