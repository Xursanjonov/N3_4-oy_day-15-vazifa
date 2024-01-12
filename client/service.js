const baseURL = "http://localhost:3000/foods";

export const renderProducts = async () => {
  try {
    const res = await fetch(baseURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};