var carrito = [];
var total = 0;
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

function addProductToCart(evento) {

    if (evento.target.getAttribute('marcador')) {
        carrito.push(evento.target.getAttribute('marcador'));

        calcularTotal();
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }
}

function showModal(evento) {

    if (evento.target.nodeName == "A") {
        $("#info").modal('show');

        const object = baseDeDatos.find(x => x.id == evento.target.getAttribute('marcador'));
        document.getElementById("infoLabel").innerHTML = object.nombre;
        if(object.ingredients != null)
            document.getElementById("ingredients").innerHTML = "Ingredients: " + object.ingredients;
        else
            document.getElementById("ingredients").innerHTML = "No ingredients or not defined";
        document.getElementById("addToCard").setAttribute('marcador', object.id);
        document.getElementById("addToCard").addEventListener('click', addProductToCart);
    }
}

function renderizarCarrito() {
    var total = 0;
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        total++;
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        const li = document.createElement('li');
        li.classList.add('clearfix')

        const img = document.createElement('img');
        img.setAttribute('alt', 'item1');
        img.style.width = '30px';
        img.style.height = '30px';
        img.setAttribute('src', miItem[0].imagen);

        const nom = document.createElement('span');
        nom.classList.add('item-name');
        nom.textContent = `${miItem[0].nombre}`;

        const preu = document.createElement('span');
        preu.classList.add('item-name');
        preu.textContent = `${miItem[0].precio}€`;

        const quantitat = document.createElement('span');
        quantitat.classList.add('item-name');
        quantitat.textContent = `Quantity: ${numeroUnidadesItem}`;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        li.appendChild(img);
        li.appendChild(nom);
        li.appendChild(preu);
        li.appendChild(quantitat)
        li.appendChild(miBoton);

        DOMcarrito.appendChild(li);
    });

    document.getElementById("contadorProductos1").innerHTML = '+1';

    setTimeout(function () {
        if (total > 99) {
            document.getElementById("contadorProductos").innerHTML = '99+';
            document.getElementById("contadorProductos1").innerHTML = '99+';
        } else {
            document.getElementById("contadorProductos").innerHTML = total;
            document.getElementById("contadorProductos1").innerHTML = total;
        }
    }, 1000);

}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
    calcularTotal();
    guardarCarritoEnLocalStorage();
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

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    calcularTotal();
    localStorage.removeItem('carrito');
}

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

//DOMbotonVaciar.addEventListener('click', vaciarCarrito);

cargarCarritoDeLocalStorage();
calcularTotal();
renderizarCarrito();