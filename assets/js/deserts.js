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
            dessert_img.classList.add('col-md-12', 'card-img');
            dessert_img.style.backgroundImage = `url(.${info.imagen})`;
            dessert_img.style.backgroundSize = 'cover';

                const dessert_body = document.createElement('div');
                dessert_body.classList.add('d-flex', 'flex-row', 'col-12', 'card-body');
                
                    const dessert_body_left = document.createElement('div');
                    dessert_body_left.classList.add('d-flex', 'flex-column', 'col-8');

                        const dessert_body_left_p = document.createElement('p');
                        dessert_body_left_p.classList.add('ps-2', 'col-12', 'card-body-title');
                        dessert_body_left_p.innerHTML = info.nombre;

                        const dessert_body_left_span = document.createElement('span');
                        dessert_body_left_span.classList.add('col-12','d-flex', 'w-100', 'ps-2', 'card-body-price');
                        dessert_body_left_span.innerHTML = info.precio.toFixed(2) + " €";

                    dessert_body_left.appendChild(dessert_body_left_p);
                    dessert_body_left.appendChild(dessert_body_left_span);

                    const dessert_body_right = document.createElement('div');
                    dessert_body_right.classList.add('d-flex', 'flex-row', 'justify-content-end', 'col-4');

                        const dessert_body_right_button = document.createElement('button');
                        dessert_body_right_button.classList.add('add', 'btn', 'btn-outline-dark', 'me-2', 'd-flex', 'justify-content-center', 'align-items-center');
                        dessert_body_right_button.setAttribute('marcador', info.id);
                        dessert_body_right_button.addEventListener('click', anyadirProductoAlCarrito);

                            const dessert_body_right_button_i = document.createElement('i');
                            dessert_body_right_button_i.classList.add('fa-solid', 'fa-bag-shopping');

                        dessert_body_right_button.appendChild(dessert_body_right_button_i);
                    
                    dessert_body_right.appendChild(dessert_body_right_button);

                dessert_body.appendChild(dessert_body_left);
                dessert_body.appendChild(dessert_body_right);

            dessert.appendChild(dessert_img);
            dessert.appendChild(dessert_body);

            DOMitems.appendChild(dessert);
            }
        });
    }
    renderizarProductos();
}