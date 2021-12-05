
var carrito = [];
var total = 0;
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const miLocalStorage = window.localStorage;

function buildCart(item, quantity){
    const li = document.createElement('li');
    li.classList.add('clearfix', 'd-flex','flex-row', 'col-12', 'list-group-item');
    const img = document.createElement('img');
    img.classList.add('col-xl-1', 'col-lg-2', 'col-3');
    img.src = item.imagen;
    $(img).on("error", function () {
        $(this).attr("src", "https://via.placeholder.com/70x70");
    });
    const div = document.createElement('div');
    div.classList.add('d-flex', 'col-xl-11', 'col-lg-10', 'col-9' ,'flex-column');
    div.style.paddingRight = '.7rem';
    const spanName = document.createElement('span');
    spanName.classList.add('item-name');
    spanName.textContent = item.nombre;
    const divRow = document.createElement('div');
    divRow.classList.add('d-flex', 'flex-row');
    const spanPrice = document.createElement('span');
    spanPrice.classList.add('col-3', 'item-price');
    spanPrice.textContent = item.precio.toFixed(2) + " €";
    const spanQuantity = document.createElement('span');
    spanQuantity.classList.add('col-9', 'text-end', 'item-quantity');
    spanQuantity.textContent = `Quantity: ${quantity}`;
    const a = document.createElement('a');
    a.classList.add('col-12', 'text-end', 'item-remove');
    a.textContent = 'Remove';
    a.dataset.item = item.id;
    a.style.cursor = 'pointer';
    a.addEventListener('click', borrarItemCarrito);
    divRow.appendChild(spanPrice);
    divRow.appendChild(spanQuantity);
    div.appendChild(spanName);
    div.appendChild(divRow);
    div.appendChild(a);
    li.appendChild(img);
    li.appendChild(div);
    DOMcarrito.appendChild(li);
}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];

    if(carritoSinDuplicados.length === 0){
        
        const p = document.createElement('p');
        p.textContent = 'Your cart is empty';
        DOMcarrito.appendChild(p);

        document.getElementById("boton-pay").disabled = true;
        document.getElementById("boton-pay").style.backgroundColor = "grey";
        document.getElementById("boton-pay").style.color = "white";
        document.getElementById("boton-pay").style.cursor = "not-allowed";

    }else{

        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);

            buildCart(miItem[0], numeroUnidadesItem);

        });
    }
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

    if(carrito.length===0){
        //alert("The card is empty");
        window.open('order.html','_self');

    }else{
        var divContents = document.getElementById("GFG").innerHTML;
        var a = window.open('', '', 'height=500, width=800');
        a.document.write('<html>');
        a.document.write('<body > <h1>Your cart is:: <br>');
        a.document.write(Math.floor(Math.random() * (10000 - 0) + 0));
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
        window.open('index.html','_self');
        localStorage.removeItem('carrito');
        localStorage.removeItem('name');
    }

}