<h1>
  <span class="prefix"></span>
  <span class="headline">Intro to JavaScript: Debugging Olympics</span>
</h1>

## Solution

| # | Broken code | Fix | Concept |
|---|---|---|---|
| 1 | `cosnt companyName` | `const companyName` | JavaScript keyword spelling |
| 2 | `const developerName = Aisha` | Add quotes around `'Aisha'` | String values |
| 3 | `let tasksCompleted = '3'` | Change `'3'` to `3` | Number vs. string (`typeof`) |
| 4 | `let isAvailable = 'true'` | Change `'true'` to `true` | Boolean vs. string (`typeof`) |
| 5 | `const currentProject = 'Unassigned'` | Change `const` to `let` | Reassignment |
| 6 | `console.Log(...)` | Use `console.log(...)` | Method names are case-sensitive |
| 7 | `developername` | Use `developerName` | Variable names are case-sensitive |
| 8 | `const updateMessage = '${...}'` | Use backticks instead of single quotes | Template literals and interpolation |

## About

Welcome to the **Debugging Olympics**! A small software company in Bahrain has a broken JavaScript program. Your job is to find and fix the bugs.

You will practice `console.log()`, `let`, `const`, variable names, data types, `typeof`, and template literals.

You do **not** need to write a new program. Fix the existing one.

## Content

| Section | Skills |
| ------ | ------ |
| [Setup](./setup/README.md) | Open the starter code and run JavaScript with Node.js |
| [Debugging Challenge](./challenge/README.md) | Find errors, fix unexpected output, and check the result |

## Time

**20 minutes total:** 2 minutes to set up, 15 minutes to debug, and 3 minutes to check your work.

## Scoring

- **8 bugs** are hidden in `app.js`.
- Each fixed bug is worth **5 points** (40 points total).
- Some bugs produce error messages. Others allow the program to run but show the wrong result.
- **Bonus (3 points):** Add a useful JavaScript comment explaining one bug you fixed.
- **Bonus (3 points):** Make one Git commit with a clear message after you finish.

> 🧠 The goal is to fix the code correctly, not to finish before everyone else.

**Prerequisite:** Intro to JavaScript (Fundamentals, Variables, Primitive Data Types, Template Literals).

📖 [References](./references/README.md)
