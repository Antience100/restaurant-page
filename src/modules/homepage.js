import pexelAtahanDemir from "../images/pexels-atahan-demir.jpg";

export function createHomepage() {
  document.getElementById("content").innerHTML = "";
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const img = document.createElement("img");

  const content = document.getElementById("content");

  div.id = "homepage";
  div.classList.add = "pageContent";
  h1.textContent = "Catto Cafe";
  img.src = pexelAtahanDemir;

  content.appendChild(div);
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);

  p.innerHTML =
    "<span><strong>This is the best Catfe ever!</strong></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati ad consequatur cum. Necessitatibus non delectus rerumnostrum repudiandae eum repellendus omnis officiis. Molestiaslaboriosam soluta vitae neque animi. Eos beatae quis molestias hic,cum, sunt, dolore corporis odio cupiditate nihil recusandae distinctioexercitationem optio praesentium architecto placeat eveniet! Ullam sitvel fugiat nulla dolorum nostrum excepturi nisi nam quas?";
}
