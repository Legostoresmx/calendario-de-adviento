const ofertasButton = document.getElementById('ofertasButton');
const retosButton = document.getElementById('retosButton');
const card = document.getElementById('card');
const cardOffer = document.getElementById('cardOffer');
const cardOffer2 = document.getElementById('cardOffer2');
const buttonCard = document.getElementById('buttonCard');

retosButton.addEventListener('click', function (){
    removeOffer();
    addReto();
    RemoveCards();
    RemoveCards2();
    RemoveButton();
    RemoveClss();
})

function addReto(){
    console.log('hola1')
    card.classList.add('carousel__item-reto');
}

function removeOffer() {
    console.log('hola2')
    card.classList.remove('oferta1');
}

function RemoveCards() {
    cardOffer.classList.add('ocultar')
}
function RemoveCards2() {
    cardOffer2.classList.add('ocultar')
}

function RemoveButton() {
    buttonCard.classList.add('ocultar')
}

function RemoveClss() {
    buttonCard.classList.remove('bta-container__carousel')
}

ofertasButton.addEventListener('click', function(){
    RemoveReto();
    addOffer();
    ShowCard1();
    ShowCard2();
    Addbutton();
    AddClass();
})

function RemoveReto(){
    card.classList.remove('carousel__item-reto');
}

function addOffer() {
    card.classList.add('oferta1')
}

function ShowCard1() {
     cardOffer.classList.remove('ocultar')
}
function ShowCard2() {
     cardOffer2.classList.remove('ocultar')
}
function Addbutton() {
    buttonCard.classList.remove('ocultar')
}
function AddClass() {
    buttonCard.classList.add('bta-container__carousel')
}