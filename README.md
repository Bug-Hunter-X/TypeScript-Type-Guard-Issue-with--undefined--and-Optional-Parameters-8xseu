# TypeScript Type Guard Issue with 'undefined' and Optional Parameters

This repository demonstrates a subtle bug in TypeScript's type guard behavior when dealing with 'undefined' values and optional parameters.  The issue arises when a function expects a string or null, but 'undefined' is passed as an argument.  TypeScript's type guard doesn't always correctly narrow the type, leading to a runtime error even though the code seems logically sound.

The `bug.ts` file contains the erroneous code, while `bugSolution.ts` shows a corrected version.

## Bug Reproduction

1. Clone this repository.
2. Compile and run `bug.ts` using a TypeScript compiler.
3. Observe the error when `undefined` is passed to `printName` function.