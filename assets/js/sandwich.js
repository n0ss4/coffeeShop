window.onload = function () {
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            if(info.categoria=='biquini' || info.categoria=='llom' || info.categoria=='truita'){

            const DOMitems = document.querySelector('#sandwich');
            
            const sandwich = document.createElement('a');
            sandwich.setAttribute('href', '#!');
            sandwich.setAttribute('marcador', info.id);
            sandwich.addEventListener('click', showModal);
            sandwich.classList.add('card', 'card-top', 'col-xxl-3', 'col-xl-4', 'col-lg-6', 'col-md-6', 'col-12', 'd-flex', 'flex-column', 'mb-2');

                const sandwich_img = document.createElement('div');
                sandwich_img.classList.add('col-md-12', 'card-img');
                sandwich_img.style.backgroundImage = `url(.${info.imagen})`;
                sandwich_img.style.backgroundSize = 'cover';
                sandwich_img.style.pointerEvents = 'none';

                const sandwich_body = document.createElement('div');
                sandwich_body.classList.add('d-flex', 'flex-row', 'col-12', 'card-body');
                sandwich_body.style.pointerEvents = 'none';
                
                    const sandwich_body_left = document.createElement('div');
                    sandwich_body_left.classList.add('d-flex', 'flex-column', 'col-8');
                    sandwich_body_left.style.pointerEvents = 'none';

                        const sandwich_body_left_p = document.createElement('p');
                        sandwich_body_left_p.classList.add('ps-2', 'col-12', 'card-body-title');
                        sandwich_body_left_p.innerHTML = info.nombre;
                        sandwich_body_left_p.style.pointerEvents = 'none';

                        const sandwich_body_left_span = document.createElement('span');
                        sandwich_body_left_span.classList.add('col-12','d-flex', 'w-100', 'ps-2', 'card-body-price');
                        sandwich_body_left_span.innerHTML = info.precio.toFixed(2) + " ???";
                        sandwich_body_left_span.style.pointerEvents = 'none';

                    sandwich_body_left.appendChild(sandwich_body_left_p);
                    sandwich_body_left.appendChild(sandwich_body_left_span);

                    const sandwich_body_right = document.createElement('div');
                    sandwich_body_right.classList.add('d-flex', 'flex-row', 'justify-content-end', 'col-4');
                    sandwich_body_right.style.pointerEvents = 'none';

                        const sandwich_body_right_button = document.createElement('button');
                        sandwich_body_right_button.classList.add('add', 'btn', 'btn-outline-dark', 'me-2', 'd-flex', 'justify-content-center', 'align-items-center');
                        sandwich_body_right_button.setAttribute('type', 'button');
                        sandwich_body_right_button.setAttribute('marcador', info.id);
                        $(sandwich_body_right_button).on("click", addProductToCart);
                        sandwich_body_right_button.style.pointerEvents = 'auto';

                            const sandwich_body_right_button_i = document.createElement('i');
                            sandwich_body_right_button_i.classList.add('fa-solid', 'fa-bag-shopping');
                            sandwich_body_right_button_i.style.pointerEvents = 'none';

                        sandwich_body_right_button.appendChild(sandwich_body_right_button_i);
                    
                    sandwich_body_right.appendChild(sandwich_body_right_button);

                sandwich_body.appendChild(sandwich_body_left);
                sandwich_body.appendChild(sandwich_body_right);

            sandwich.appendChild(sandwich_img);
            sandwich.appendChild(sandwich_body);

            DOMitems.appendChild(sandwich);
            }
        });
    }
    renderizarProductos();
}

