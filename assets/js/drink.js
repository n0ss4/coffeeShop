window.onload = function () {
    const DOMitems = document.querySelector('#drink');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            if(info.categoria=='aigua' || info.categoria=='cervesa' || info.categoria=='beguda' || info.categoria=='suc'){

            const drink = document.createElement('a');
            drink.setAttribute('href', '#!');
            drink.classList.add('card', 'card-top', 'col-xxl-3', 'col-xl-4', 'col-lg-6', 'col-md-6', 'col-12', 'd-flex', 'flex-column', 'mb-2');
            drink.setAttribute('marcador', info.id);
            drink.addEventListener('click', anyadirProductoAlCarrito);

            const drink_img = document.createElement('div');
            drink_img.classList.add('col-md-12', 'card-img');
            drink_img.style.backgroundImage = `url(.${info.imagen})`;
            drink_img.style.backgroundSize = 'cover';

            const drink_body = document.createElement('div');
            drink_body.classList.add('d-flex', 'flex-column', 'col-12', 'card-body');

                const drink_body_p = document.createElement('p');
                drink_body_p.classList.add('ps-2', 'col-12', 'card-body-title');
                drink_body_p.innerHTML = info.nombre;

                const drink_body_span = document.createElement('span');
                drink_body_span.classList.add('price', 'd-flex', 'w-100', 'ps-2', 'card-body-price');
                drink_body_span.innerHTML = info.precio.toFixed(2) + " €";

            drink_body.appendChild(drink_body_p);
            drink_body.appendChild(drink_body_span);

            drink.appendChild(drink_img);
            drink.appendChild(drink_body);

            DOMitems.appendChild(drink);
            }
        });
    }
    renderizarProductos();
}