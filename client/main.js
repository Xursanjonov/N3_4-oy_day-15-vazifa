const box = document.querySelector("#box");

const baseURL = "http://localhost:3000";

const getUsers = async () => {
  try {
    const res = await fetch(`${baseURL}/foods`);
    console.log(res);
    const data = await res.json();

    return data;
  } catch (error) {
    // console.log(error);
  }
};

const renderData = async () => {
  const date = await getUsers();
  console.log(date);
  box.innerHTML = date?.map((product) => `<div class="cards">${product.title}</div>`).join("");
};

renderData();