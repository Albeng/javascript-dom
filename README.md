# DOM Manipulation and Events

## Lesson Objectives

1. Explain what the DOM is in relation to a webpage.
2. Explain the difference between a “node” and an “element”.
3. Explain how to target nodes with “selectors”.
4. Explain the basic methods for finding/adding/removing and altering DOM nodes.
5. Explain the difference between a “nodelist” and an “array of nodes”.
6. Explain what “bubbling” is and how it works.

### DOM - Document Object Model

- is a tree-like representation of the contents of a webpage - a tree of "nodes"
- it's like the family tree of our webpage content

### Targeting Nodes with Selectors

- when working with the DOM, we use "selectors" to target the nodes

1. querySelector
2. getElementById
3. querySelectorAll

### Element Creation = createElement

### Append Elements = appendChild, insertBefore

### Remove Elements = removeChild

### Alter Elements

1. textContent
2. style
3. setAttribute
4. removeAttribute
5. classList
6. innerHTML

### Exercise

1. Create a container div with an id of "container"
2. Inside the "container" div, append another div with a class of "content"
3. Put the content, "This is the glorious text-content!", inside the "content" container
4. Create a <p> with red text that says “Hey I’m red!”
5. Create an <h3> with blue text that says “I’m a blue h3!”
6. Create a <div> with a black border and pink background color with the following elements inside of it:
   6.1. Create another <h1> that says “I’m in a div”
   6.2. Create a <p> that says “ME TOO!”
   6.3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.