const total_commande = [];
const menu = [
    { index: 0, name: "LASAL CHEESE", prix: 900.00 },
    { index: 1, name: "JUMBO CRAB SHRIMP", prix: 1200.00 },
    { index: 2, name: "KOKTAIL JUCIE", prix: 300.00 },
    { index: 3, name: "CAPO STEAK", prix: 1990.00 },
    { index: 4, name: "ORGANIC FRUIT SALAD", prix: 200.00 },
    { index: 5, name: "CHEESE PIZZA", prix: 450.00 },
    { index: 6, name: "KOFTA MEAT", prix: 1450.00 },
    { index: 7, name: "PANISH PIES", prix: 350.00 },
    { index: 8, name: "CHEESE TOST", prix: 350.00 },
    { index: 9, name: "FRUIT SALAD", prix: 250.00 },
    { index: 10, name: "CHICKEN SHAWARMA", prix: 450.00 },
    { index: 11, name: "MEGA CHEESE PIZZA", prix: 1600.00 }
];

let tbody = document.getElementById("tbody");
let tab = "";

function show() {
    for (let i = 0; i < menu.length; i++) {
        tab += `
        <tr>
        <td>${menu[i].name}</td>
        <td>${menu[i].prix} DA</td>
        <td><button id="h-${i}" onclick="commande(${i})">Commandé</button></td>
        <td><button id="n-${i}" onclick="anulle(${i})">Annulé</button></td>
        </tr>
        `;
    }
    tbody.innerHTML = tab;
}

show();

function commande(i) {
    let btn_commande = document.getElementById(`h-${i}`);
    let btn_anulle = document.getElementById(`n-${i}`);

    btn_commande.style.background = 'green';
    btn_anulle.style.background = 'transparent';

    let obj = {
        name: menu[i].name,
        prix: menu[i].prix
    };

    total_commande.push(obj);
    let index = total_commande.indexOf(obj);
    btn_anulle.setAttribute('data-index', index);
}

function anulle(i) {
    let btn_commande = document.getElementById(`h-${i}`);
    let btn_anulle = document.getElementById(`n-${i}`);
    let index = btn_anulle.getAttribute('data-index');

    btn_commande.style.background = 'transparent';
    btn_anulle.style.background = 'transparent';

    total_commande.splice(index, 1);
    aff();
}

function aff() {
    let tb = document.getElementById("tbody-com");
    let tab = "";
    let somme = 0;

    for (let i = 0; i < total_commande.length; i++) {
        tab += `
        <tr>
        <td>${total_commande[i].name}</td>
        <td>${total_commande[i].prix}</td>
        </tr>
        `;
        somme += total_commande[i].prix;
    }

    tab += `
    <div class="total">Total prix: ${somme} DA</div>
    `;
    tb.innerHTML = tab;
}

function affichage_resulta() {
    aff();
    let div_affichage = document.querySelector(".aff_com");
    div_affichage.style.display = "grid";

    document.getElementById('ticket').style.display = 'block';

    document.getElementById('ticket-name').innerText = document.getElementById('name').value;
    document.getElementById('ticket-email').innerText = document.getElementById('email').value;
    document.getElementById('ticket-phone').innerText = document.getElementById('phone').value;
    document.getElementById('ticket-subject').innerText = document.getElementById('subject').value;

    document.getElementById('ticket-tbody').innerHTML = document.getElementById('tbody-com').innerHTML;
}

function printTicket() {
    window.print();
}

function no_affichage_resulta() {
    let div_affichage = document.querySelector(".aff_com");
    div_affichage.style.display = "none";
    total_commande.length = 0;
    document.getElementById('ticket').style.display = 'none';
}
