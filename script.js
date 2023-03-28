// const display = document.getElementById("display");
// const container = document.getElementById("container");

// console.log(display);
// console.log(container);

/*const body = document.querySelector("body");
const div = document.createElement("div");
const child2 = document.getElementById("child2");
const div2 = document.createElement("div");

body.insertBefore(div, child2);
body.appendChild(div2);

body.removeChild(div);*/

/*const body = document.querySelector("body");
const div = document.createElement("div");

div.textContent = "Hello, DOM!";

body.appendChild(div);*/

// const body = document.querySelector("body");

// body innerHTML = <h1>"Hello, DOM"</h1>;

const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink;";

container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div.appendChild(p2);

body.appendChild(container);
