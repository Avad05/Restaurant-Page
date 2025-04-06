// index.js
import { greeting } from "./greeting.js";
import "./style.css";
console.log(greeting);

import generateHome from "./home.js";
import generateMenu from "./menu.js";
import GenerateAbout from "./about.js";
generateHome();

const navigation = document.querySelector("nav");
navigation.addEventListener("click", (event)=>{
    let choice = event.target.id;

    switch(choice){
        case "home":
            generateHome();
            break;

        case "menu":
            generateMenu();
            break;   
        
         case "about":
            GenerateAbout();
            break; 
    }
}
);
