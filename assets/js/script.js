
import { menuData } from "./modules/menuData.js";
console.dir(menuData);


//VARIABLES
const navHeaderUl = document.querySelector("#header-nav>ul");
//const menuItems = document.createElement("li");

//FUNCTIONS
/* function appendItems (i) {
    navHeaderUl.append(menuItems);
    menuItems.innerHTML = menuData[i].title;
    };
appendItems(0); */

/* function appendItems([i]){
    navHeaderUl.append(menuItems)
    menuItems.innerHTML = menuData[i].title;
    };
appendItems([0]); */

let activeSubMenu = null;  // Track the currently visible submenu
let activeListItem = null; // Track the currently clicked list item

menuData.forEach((menuItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = menuItem.title; // Set the title as the li text
    navHeaderUl.appendChild(listItem); // Append the li to the ul

    // Event listener for each list item
    listItem.addEventListener("click", () => {
         // If the same item is clicked and the submenu is active, remove it
         if (activeListItem === listItem) {
            if (activeSubMenu) {
                activeSubMenu.remove();
                activeSubMenu = null;
                activeListItem = null; // Reset active list item
            }
            return;
        }
        // Hide the currently active submenu if there is one
        if (activeSubMenu) {
            activeSubMenu.remove();
        }

        // Create the new submenu (ul) and append it after the clicked item
        const subMenuUl = document.createElement("ul");
        subMenuUl.classList.add("submenu"); // Add a class for styling if needed
        menuItem.sousMenu.forEach(subMenuItem => {
            const subMenuLi = document.createElement("li");
            subMenuLi.textContent = subMenuItem;
            subMenuUl.append(subMenuLi);
        });

        listItem.append(subMenuUl);  // Append the submenu to the clicked list item
        activeSubMenu = subMenuUl;  // Set this submenu as active
        activeListItem = listItem;  // Set this list item as the currently active one
    });
});
