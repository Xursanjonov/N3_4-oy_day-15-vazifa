const box = document.querySelector("#box");

const baseURL = "http://localhost:3000"

const getFoods = async ()=> {
    try {
        const res = await fetch(`${baseURL}/foods`)
        const data = await res.json()
        console.log(data);
    } catch (e) {
        console.log(e);
        
    }
}