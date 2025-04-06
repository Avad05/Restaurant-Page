export default function GenerateAbout(){
    const content = document.querySelector("#content");
    content.textContent = '';

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about"); 
    aboutContainer.textContent ="Welcome to देसी Dhaba, where every meal is a celebration of India’s rich culinary heritage. Rooted in tradition and spiced with love, our menu brings the vibrant flavors of the Indian subcontinent to your table — from the streets of Delhi to the kitchens of South India."
    content.appendChild(aboutContainer);
}