const ul = document.getElementById("ul");

const li = document.createElement("li");
li.textContent = "New Item";
li.style.backgroundColor = "crimson";
li.addEventListener("click", () => {
  console.log(1);
});

ul.appendChild(li);

const root = document.getElementById("root");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

root.addEventListener("click", (e) => {
  if (e.target.className === "item") {
    console.log(e.target, e.currentTarget);
  }
});
