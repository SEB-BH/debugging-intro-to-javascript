<h1>
  <span class="headline">Intro to JavaScript: Debugging Olympics</span>
  <span class="subhead">Debugging Challenge</span>
</h1>

**Learning objective:** Find and fix common JavaScript mistakes using error messages and `console.log()`.

## Scenario

You are a junior developer at **Pearl Digital**, a software company in Bahrain.

The company has a small program that shows a developer's information before and after a team meeting. Unfortunately, the program has **8 bugs**.

Your job is to repair the program so that it displays the correct information.

## Rules

1. Work in **`app.js` only**.
2. **Do not delete the program and start over.** Fix the mistakes in the existing code.
3. Run `node app.js` after every fix.
4. Read the **first error** you see. Look at its line number.
5. When the errors stop, compare the output with the expected result below. Some bugs do not produce errors!

## Expected result

When all 8 bugs are fixed, running `node app.js` should print:

```text
--- Before the meeting ---
Tasks completed: 3
Tasks type: number
Availability type: boolean
Project: Unassigned
Mentor: undefined
--- After the meeting ---
Developer: Aisha
Tasks completed: 4
Available: false
Project: Client Portal
Mentor: Fatima
Aisha at Pearl Digital is working on Client Portal.
```

> 💡 `Mentor: undefined` is **correct** before the meeting. This variable has not been assigned a value yet.

## Hints (use only if needed)

- Is every JavaScript keyword spelled correctly?
- Do text values have quotation marks?
- Are numbers and booleans stored using the right data types?
- Can a variable declared with `const` be reassigned?
- Is JavaScript case-sensitive?
- Which type of quotation mark lets you use `${}`?