# AI Learning Platform — development status

Live status page for the AI Learning Platform build: what is finished, what is
being worked on, what is blocked and whose move it is.

**Open it here:** https://anirudhatalmale6-alt.github.io/ai-learning-status/

## How it stays honest

The page renders itself from [`status.js`](status.js). Percentages, counts,
progress bars and each phase's own state are **calculated** from the task list —
none of them can be typed in, so the headline number cannot drift away from the
tasks underneath it.

Two rules are deliberate:

- Blocked work is counted as **blocked**, never as progress.
- A phase reads *Blocked* only when every unfinished task in it is blocked. One
  blocked dependency among nine buildable tasks is *Not started*.

## Screenshots

The screenshot section stays empty until a real screen exists. Every image that
appears there is a capture of the running application — never a mockup.

## Note on where the code lives

This repository holds the status page only. The **application source code is in a
separate private repository** and is not published anywhere.
