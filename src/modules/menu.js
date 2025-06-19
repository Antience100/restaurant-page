import pexelJeffVinluan from "../images/pexels-jeff-vinluan.jpg";

export function createMenuPage() {
  document.getElementById("content").innerHTML = "";
  const menuItems = [
    "Esspurresso",
    "Catpurrcino",
    "Catte",
    "Chai Catte",
    "Macchicato",
    "Meowtcha Catte",
    "Hot Chococat",
    "Meowtcha",
    "Iced Catte",
    "Iced Chai Catte",
    "Iced Meowtcha",
    "Meowtcha Meowshake",
    "Cat Cupcake",
  ];

  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");
  const img = document.createElement("img");

  const content = document.getElementById("content");

  div.id = "menuPage";
  div.classList.add = "pageContent";
  h2.textContent = "Menu";
  img.src = pexelJeffVinluan;

  content.appendChild(div);
  div.appendChild(h2);
  div.appendChild(ul);

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = item;

    span.textContent = `$4`;

    li.appendChild(span);
    ul.appendChild(li);
  });
}
