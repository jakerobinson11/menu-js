//VARIABLES
const navHeaderUl = document.querySelector("#header-nav>ul");
const menuPrincipale = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5"
];
const sousMenu = [
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3",
        "Sous Item 4"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1",
        "Sous Item 2",
        "Sous Item 3"
    ],
    [
        "Sous Item 1"
    ]
]

// FUNCTIONS
function ouvertureMenu(itemNumber) {

    // ajouter un evenement click sur un element avec un id "item0"
    // pour qu'il envoie un console log bonjour
    document.querySelector("#item" + itemNumber).addEventListener("click", function () {
        // je supprime avec une boucle tous les sous menu ouverts (not undefined)
        if (document.body.contains(document.querySelector(`#item${itemNumber} ul`))) {
            document.querySelector(`#item${itemNumber} ul`).remove();
        } else {
            for (let i = 0; i < sousMenu.length; i++) {
                if (document.querySelector(`#item${i} ul`) != undefined) {
                    document.querySelector(`#item${i} ul`).remove();
                }
            }
            const ulSubMenu = document.createElement("ul");
            //insertion de cet element dans un parent AVANT son contenu
            // document.querySelector("#item0").prepend(ulSubMenu);
            //insertion de cet element dans un parent APRES son contenu
            document.querySelector("#item" + itemNumber).append(ulSubMenu);
            sousMenu[itemNumber].forEach(function (element, index) {
                console.log(element, index);
                const liSubMenu = document.createElement("li");
                liSubMenu.innerText = element;
                ulSubMenu.append(liSubMenu);
            });
        } 
    })
}


// LOGIQUE
let i = 0;

while (i < menuPrincipale.length) {
    let n = i;
    /* navHeaderUl.innerHTML += "<li id='item'>" +menuPrincipale[i]+"</li>"; */
    navHeaderUl.innerHTML += `<li id="item${i}">${menuPrincipale[i]}</li>`;
    i++;
}
ouvertureMenu(0);
ouvertureMenu(1);
ouvertureMenu(2);
ouvertureMenu(3);
ouvertureMenu(4);