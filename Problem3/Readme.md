Convert the existing task management application implemented using local state management with React hooks into a more scalable and maintainable architecture using the Context API for state management. ref(https://legacy.reactjs.org/docs/context.html)


# Task Management Application with Context API

This problem aims to convert an existing task management application implemented using local state management with React hooks into a more scalable and maintainable architecture using the Context API for state management.

## Background

React Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's particularly useful for sharing data that is needed by many components at different nesting levels.

For more information on React Context API, refer to the [official documentation](https://legacy.reactjs.org/docs/context.html).

## Implementation

The existing task management application will be refactored to utilize the Context API for state management. This involves:

1. Creating a Context to hold the application state.
2. Providing the Context at the top level of the component tree.
3. Consuming the Context in components that need access to the state or state-modifying functions.


