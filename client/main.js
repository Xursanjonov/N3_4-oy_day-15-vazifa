import {renderProducts, getCategory} from './service.js';

const box = document.querySelector("#box");
const content_tab = document.querySelector(".content_tab");

const renderData = async (id) => {
  const data = await getCategory(id);

  box.innerHTML = await data?.products?.map((item) => {
    console.log(item);
    return `
    <div class="cards">
      <img class="image" src="${item.img}" alt="">
      <h3 class="productTitle">${item.title}</h3>
      <p class="productPrice">$ ${item.price}</p>
      <h5 class="productText">${item.text}</h5>
    </div>
    `;
  }).join("")
};

(async () => {
  const data = await renderProducts();
  content_tab.innerHTML = data
    ?.map(
      (item) =>
        `
    <button id="${item.id=="1"?"active":""}" class="btn" data-id="${item.id}">${item.category}</button>
    `
    )
    .join("");
  data[0].id;
  renderData(data[0]?.id);
})();
