# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by updating state within the `useEffect` function and including the state variable in the dependencies array. This leads to the effect being triggered repeatedly, causing performance issues and potentially crashing the application.

## Bug Description
The `bug.js` file contains a `MyComponent` that uses `useState` and `useEffect`. The `useEffect` hook attempts to increment the `count` state variable in every render. Since `count` is in the dependency array, the `useEffect` will trigger again and again. This creates an infinite loop.

## Solution
The `bugSolution.js` file provides the fix.  The dependency array is changed to prevent the infinite loop. 