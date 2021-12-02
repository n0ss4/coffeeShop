window.onload = function () {
    const DOMitems = document.querySelector('#sandwich');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            if(info.categoria=='biquini' || info.categoria=='llom' || info.categoria=='truita'){

            const sandwich = document.createElement('a');
            sandwich.setAttribute('href', '#!');
            sandwich.classList.add('card', 'card-top', 'col-xxl-3', 'col-xl-4', 'col-lg-6', 'col-md-6', 'col-12', 'd-flex', 'flex-column', 'mb-2');
            sandwich.setAttribute('marcador', info.id);
            sandwich.addEventListener('click', anyadirProductoAlCarrito);

                const sandwich_img = document.createElement('div');
                sandwich_img.classList.add('col-md-12', 'h-75');
                sandwich_img.style.backgroundImage = `url(.${info.imagen})`;
                sandwich_img.style.backgroundSize = 'cover';

                const sandwich_body = document.createElement('div');
                sandwich_body.classList.add('d-flex', 'flex-row', 'col-12', 'h-25');

                    const sandwich_body_p = document.createElement('p');
                    sandwich_body_p.classList.add('ps-2', 'col-10');
                    sandwich_body_p.innerHTML = info.nombre;

                    const sandwich_body_span = document.createElement('span');
                    sandwich_body_span.classList.add('price', 'd-flex', 'w-100', 'justify-content-end', 'pe-2', 'pt-2');
                    sandwich_body_span.innerHTML = `${info.precio}€`;

                sandwich_body.appendChild(sandwich_body_p);
                sandwich_body.appendChild(sandwich_body_span);

            sandwich.appendChild(sandwich_img);
            sandwich.appendChild(sandwich_body);

            DOMitems.appendChild(sandwich);
            }
        });
    }
    renderizarProductos();
}