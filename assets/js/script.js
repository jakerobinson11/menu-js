
import { menuData } from "./modules/menuData.js";
console.dir(menuData);


//VARIABLES
const navHeaderUl = document.querySelector("#header-nav>ul");
let activeSubMenu = null;  // Track the currently visible submenu
let activeListItem = null; // Track the currently clicked list item
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

// Function to create a submenu (ul) with its items
function createSubMenu(menuItems) {
    const subMenuUl = document.createElement("ul");
    subMenuUl.classList.add("submenu");

    menuItems.forEach(subMenuItem => {
        const subMenuLi = document.createElement("li");
        subMenuLi.textContent = subMenuItem;
        subMenuUl.appendChild(subMenuLi);
    });

    return subMenuUl;
}

// Function to show the submenu for a clicked item
function showSubMenu(listItem, menuItem) {
    const subMenuUl = createSubMenu(menuItem.sousMenu);
    listItem.appendChild(subMenuUl);
    activeSubMenu = subMenuUl;
    activeListItem = listItem;
}

// Function to remove the currently active submenu
function removeActiveSubMenu() {
    if (activeSubMenu) {
        activeSubMenu.remove();
        activeSubMenu = null;
        activeListItem = null;
    }
}

// Function to handle the click event on a list item
function handleMenuClick(listItem, menuItem) {
    // If the clicked item is already active, hide its submenu
    if (activeListItem === listItem) {
        removeActiveSubMenu();
        return;
    }

    // Remove any currently visible submenu
    removeActiveSubMenu();

    // Show the submenu for the clicked item
    showSubMenu(listItem, menuItem);
}

// Function to create and append all menu items to the DOM
function createMenu() {
    menuData.forEach(menuItem => {
        const listItem = document.createElement("li");
        listItem.textContent = menuItem.title;
        navHeaderUl.appendChild(listItem);

        // Attach the event listener to handle clicks on the list item
        listItem.addEventListener("click", () => handleMenuClick(listItem, menuItem));
    });
}

// Initialize the menu creation
createMenu();