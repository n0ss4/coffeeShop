
var carrito = [];
var total = 0;
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const miLocalStorage = window.localStorage;

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}€`;
        DOMcarrito.appendChild(miNodo);
    });
}

function borrarItemCarrito() {
    carrito = carrito.filter((carritoId) => {
        return carritoId !== "100" & carritoId !== "101" & carritoId !== "102" & carritoId !== "103" &
        carritoId !== "104" & carritoId !== "105" & carritoId !== "106" & carritoId !== "107" & carritoId !== "108"
        & carritoId !== "109";
    });
    guardarCarritoEnLocalStorage();
    window.location.replace("menu.html");
}

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

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

cargarCarritoDeLocalStorage();
calcularTotal();
renderizarCarrito();


function printDiv() {
    var divContents = document.getElementById("GFG").innerHTML;
    var a = window.open('', '', 'height=500, width=800');
    a.document.write('<html>');
    a.document.write('<body > <h1>La seva comanda es: <br>');
    a.document.write(Math.floor(Math.random() * (10000 - 0) + 0));
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
    window.open('index.html','_self');
    localStorage.removeItem('carrito');
    localStorage.removeItem('name');
}