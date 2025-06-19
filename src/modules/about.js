import pexelZeynep from "../images/pexels-zeynep.jpg";

export function createAboutPage() {
  document.getElementById("content").innerHTML = "";
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  const content = document.getElementById("content");

  div.id = "aboutPage";
  div.classList.add = "pageContent";
  h2.textContent = "About Catto Cafe";
  img.src = pexelZeynep;

  p.textContent =
    "The reason why Catto Cafe is the best is because it simply is the best! Also Cats, duh! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At deleniti ad nobis modi, illo impedit maxime fugiat officia expedita ducimus quidem nihil voluptatum eos temporibus suscipit blanditiis. Consectetur iure accusamus ad odit doloremque incidunt aperiam consequatur, voluptate minus quos qui nulla, esse necessitatibus excepturi ratione modi vero illo autem illum. Placeat culpa molestias explicabo recusandae repellendus? Maxime tenetur rerum commodi.";

  content.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(img);
}