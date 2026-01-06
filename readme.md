1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

i) getElementById : It returns single element ,if not found return null
ii) getElementsByClassName : It returns multiple element and automatically Updates if DOM change .
iii) querySelector : return 1st matching Elements .
iv) querySelectorAll: Returns all matching elements, does not auto-update if DOM changes.


2. How do you create and insert a new element into the DOM?

i) For Creating Element : document.createElement("tag")
ii)For adding content/attributes: textContent, classList, setAttribute
iii)Then Insert it : by append , appendChild.

For Example

// Create a new paragraph
const p = document.createElement("p");
p.textContent = "Hello World!";
p.classList.add("my-paragraph");

// Insert into a div with id="container"
const container = document.getElementById("container");
container.appendChild(p); // adds at the end

3. What is Event Bubbling and how does it work?
Ans : When an event happens on a DOM element, it propagates upwards through its ancestors in the DOM tree.

let's see the order of this : parents -> Grandparent ->.....->document

4. What is Event Delegation in JavaScript? Why is it useful?

Definition: Definition: Instead of attaching event listeners to multiple child elements, attach it to their common parent and detect which child triggered it.

Why it is  useful?

i) Saves memory (less listeners)

ii) Works for dynamic elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?

i) preventDefault(): Stops the default browser action (for example: link navigation, form submit)

ii) stopPropagation() : Stops event bubbling to parent elements.

 