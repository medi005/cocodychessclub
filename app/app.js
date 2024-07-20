// document.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tab');
//     const contents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // Retirer la classe active de tous les onglets et contenus
//             tabs.forEach(t => t.classList.remove('active'));
//             contents.forEach(c => c.classList.remove('active'));

//             // Ajouter la classe active à l'onglet et au contenu cliqués
//             tab.classList.add('active');
//             document.getElementById(tab.dataset.content).classList.add('active');
//         });
//     });
// });0

//Code burger menu

const buttonBurger = document.querySelector(".burger-button");
const navBurgerMenu = document.querySelector(".burger-menu");

buttonBurger.addEventListener("click", toggleNav);

function toggleNav(){
    buttonBurger.classList.toggle("active");
    navBurgerMenu.classList.toggle("active");
}