const navHeaderUl = document.querySelector("#header-nav>ul");
const menuPrincipale = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5"
];
const sousMenu1 = [
    "Sous Item 1",
    "Sous Item 2",
    "Sous Item 3"
]
let i = 0;
while(i<menuPrincipale.length) {

    /* navHeaderUl.innerHTML += "<li id='item'>" +menuPrincipale[i]+"</li>"; */
    navHeaderUl.innerHTML += `<li id="item${i}">${menuPrincipale[i]}</li>`;
    i++;
}
// ajouter un evenement click sur un element avec un id "item0"
// pour qu'il envoie un console log bonjour
document.querySelector("#item0").addEventListener("click", function () {
    console.log("bonjour");
})
