function recopilarMenu(){

    const firstMarcador = $('input[name="first"]:checked').offsetParent()[0] !== undefined ? $('input[name="first"]:checked').offsetParent()[0].getAttribute('marcador') : null;
    const secondMarcador = $('input[name="second"]:checked').offsetParent()[0] !== undefined ? $('input[name="second"]:checked').offsetParent()[0].getAttribute('marcador') : null;
    const dessertMarcador = $('input[name="dessert"]:checked').offsetParent()[0] !== undefined ? $('input[name="dessert"]:checked').offsetParent()[0].getAttribute('marcador') : null;
    const drinkMarcador = $('input[name="drink"]:checked').offsetParent()[0] !== undefined ? $('input[name="drink"]:checked').offsetParent()[0].getAttribute('marcador') : null;

    if(firstMarcador == null || secondMarcador == null || dessertMarcador == null || drinkMarcador == null){
        
        Swal.fire({
            title: 'Error',
            text: 'Debe seleccionar una opción',
            icon: 'error',
        });

        return false;
    }else{
        carrito.push("111");

        calcularTotal();
        renderizarCarrito();
        guardarCarritoEnLocalStorage();

        Swal.fire(
            'Menú agregado',
            'Se ha añadido el menú al carrito',
            'success'
          )
    }

    return true;

}


function buildMenu(item, dom, name) {
    const card = document.createElement('a');
            card.classList.add('card', 'card-top', 'col-xxl-3', 'col-xl-4', 'col-lg-6', 'col-md-6', 'col-12', 'd-flex', 'flex-column', 'mb-2');
            card.setAttribute('href', '#');
            card.setAttribute('marcador', item.id);

                const cardImg = document.createElement('div');
                cardImg.classList.add('card-img', 'col-md-12');
                cardImg.style.backgroundImage = `url(.${item.imagen})`;
                cardImg.style.backgroundSize = 'cover';

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body', 'd-flex', 'flex-row', 'col-12');

                    const cardBodyOne = document.createElement('div');
                    cardBodyOne.classList.add('d-flex', 'flex-column', 'col-8', 'align-self-center');

                        const cardBodyTitle = document.createElement('p');
                        cardBodyTitle.classList.add('card-body-title', 'ps-2', 'col-12');
                        cardBodyTitle.innerHTML = item.nombre;

                    cardBodyOne.appendChild(cardBodyTitle);

                    const cardBodyTwo = document.createElement('div');
                    cardBodyTwo.classList.add('d-flex', 'flex-row', 'justify-content-end', 'col-4');

                    const btnCheck = document.createElement('input');
                    btnCheck.setAttribute('type', 'radio');
                    btnCheck.classList.add('btn-check');
                    btnCheck.setAttribute('name', name);
                    btnCheck.setAttribute('id', name + item.id);
                    btnCheck.setAttribute('autocomplete', 'off');

                    const btnLabel = document.createElement('label');
                    btnLabel.setAttribute('class', 'btn btn-outline-success');
                    btnLabel.classList.add('add', 'me-2', 'd-flex', 'justify-content-center', 'align-items-center');
                    btnLabel.setAttribute('for', name + item.id);
                    btnLabel.innerHTML = '<i class="fa-solid fa-check"></i>';

                    cardBodyTwo.appendChild(btnCheck);
                    cardBodyTwo.appendChild(btnLabel);

                cardBody.appendChild(cardBodyOne);
                cardBody.appendChild(cardBodyTwo);

            card.appendChild(cardImg);
            card.appendChild(cardBody);

        dom.appendChild(card);
}

window.onload = function () {

    const DOMfirst = document.getElementById('first');

    const first = baseDeDatos.filter(item => (item.categoria === 'menu') && (item.sub_categoria === 'first'));
    first.forEach(item => {
            buildMenu(item, DOMfirst, 'first');
    });

    const DOMsecond = document.getElementById('second');

    const second = baseDeDatos.filter(item => (item.categoria === 'menu') && (item.sub_categoria === 'second'));
    second.forEach(item => {
            buildMenu(item, DOMsecond, 'second');
    });

    const DOMdessert = document.getElementById('dessert');

    const dessert = baseDeDatos.filter(item => (item.categoria === 'menu') && (item.sub_categoria === 'dessert'));
    dessert.forEach(item => {
            buildMenu(item, DOMdessert, 'dessert');
    });

    const DOMdrink = document.getElementById('drink');

    const drink = baseDeDatos.filter(item => (item.categoria === 'menu') && (item.sub_categoria === 'drink'));
    drink.forEach(item => {
            buildMenu(item, DOMdrink, 'drink');
    });

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
