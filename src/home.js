import chef from "./food.png"
export default function generateHome(){

    const content = document.querySelector("#content");
    content.textContent = '';

    const tagline = document.createElement("h1");
    tagline.classList.add("heading");
    tagline.textContent = "Authentic Food of India!";
    content.appendChild(tagline);

     
    const foodImg = document.createElement("img");
    foodImg.src = chef;
    foodImg.classList.add("food");
    content.appendChild(foodImg);
    
}
