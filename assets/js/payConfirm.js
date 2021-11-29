
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
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
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

var currentChunk = 0;
var chunks = 5;

$('.alert').click(function() {
    $(".alert").alert('close');
});

$('.alert').hover(function() {
    window.clearInterval(timer);
    window.clearTimeout(time);
    $(".alert").css('opacity', 1);
}, function() {
    $(".alert").css('opacity', .9);
    timer = setInterval(function() {
        update();
    }, 10);
});

var timer = setInterval(function() {
    update();
}, 10);

var time = window.setTimeout(function() {
    $(".alert").fadeTo(1000, 0).slideUp(1000, function() {
        $(this).remove();
    });
}, ((chunks - currentChunk) * 1000));

function update() {
    currentChunk += 0.01;
    var progPercent = 100 - (currentChunk * (100 / chunks));
    $(".progress-bar").css('width', progPercent + '%').attr('aria-valuenow', progPercent);

    if (progPercent <= 0) {
        $(".alert").remove();
    }

    if (currentChunk >= 5) {
        window.clearInterval(timer);
    }
}
cargarCarritoDeLocalStorage();
calcularTotal();
renderizarCarrito();

