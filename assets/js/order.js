window.onload = function () {

    const miLocalStorage = window.localStorage;
    let nameStorage;
    if (miLocalStorage.getItem('name') !== null) {
        nameStorage = JSON.parse(miLocalStorage.getItem('name'));
        document.getElementById("name").innerHTML=nameStorage;
    }else{
        window.location.href = "index.html";
    }
    
}

var carrito = [];
var total = 0;
const miLocalStorage = window.localStorage;
const DOMtotal = document.querySelector('#total');

function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    DOMtotal.textContent = total.toFixed(2);
}
function cargarCarritoDeLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}
cargarCarritoDeLocalStorage();

calcularTotal();