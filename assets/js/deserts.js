window.onload = function () {
    const DOMitems = document.querySelector('#dessert');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            if(info.categoria=='altres'){

            const dessert = document.createElement('a');
            dessert.setAttribute('href', '#!');
            dessert.classList.add('card', 'card-top', 'col-xxl-3', 'col-xl-4', 'col-lg-6', 'col-md-6', 'col-12', 'd-flex', 'flex-column', 'mb-2');
            dessert.setAttribute('marcador', info.id);
            dessert.addEventListener('click', anyadirProductoAlCarrito);

                const dessert_img = document.createElement('div');
                dessert_img.classList.add('col-md-12', 'h-75');
                dessert_img.style.backgroundImage = `url(.${info.imagen})`;
                dessert_img.style.backgroundSize = 'cover';

                const dessert_body = document.createElement('div');
                dessert_body.classList.add('d-flex', 'flex-row', 'col-12', 'h-25');

                    const dessert_body_p = document.createElement('p');
                    dessert_body_p.classList.add('ps-2', 'col-10');
                    dessert_body_p.innerHTML = info.nombre;

                    const dessert_body_span = document.createElement('span');
                    dessert_body_span.classList.add('price', 'd-flex', 'w-100', 'justify-content-end', 'pe-2', 'pt-2');
                    dessert_body_span.innerHTML = `${info.precio}€`;

                dessert_body.appendChild(dessert_body_p);
                dessert_body.appendChild(dessert_body_span);

            dessert.appendChild(dessert_img);
            dessert.appendChild(dessert_body);

            DOMitems.appendChild(dessert);
            }
        });
    }
    renderizarProductos();
}