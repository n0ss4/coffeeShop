window.onload = function () {
    const DOMitems = document.querySelector('#drink');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            if(info.categoria=='aigua' || info.categoria=='cervesa' || info.categoria=='beguda' || info.categoria=='suc' || info.categoria == 'cafe'){

                const drink = document.createElement('a');
                drink.setAttribute('href', '#!');
                drink.setAttribute('marcador', info.id);
                drink.addEventListener('click', showModal);
                drink.classList.add('card', 'card-top', 'col-xxl-3', 'col-xl-4', 'col-lg-6', 'col-md-6', 'col-12', 'd-flex', 'flex-column', 'mb-2');
    
                    const drink_img = document.createElement('div');
                    drink_img.classList.add('col-md-12', 'card-img');
                    drink_img.style.backgroundImage = `url(.${info.imagen})`;
                    drink_img.style.backgroundSize = 'cover';
                    drink_img.style.pointerEvents = 'none';
    
                    const drink_body = document.createElement('div');
                    drink_body.classList.add('d-flex', 'flex-row', 'col-12', 'card-body');
                    drink_body.style.pointerEvents = 'none';
                    
                        const drink_body_left = document.createElement('div');
                        drink_body_left.classList.add('d-flex', 'flex-column', 'col-8');
                        drink_body_left.style.pointerEvents = 'none';
    
                            const drink_body_left_p = document.createElement('p');
                            drink_body_left_p.classList.add('ps-2', 'col-12', 'card-body-title');
                            drink_body_left_p.innerHTML = info.nombre;
                            drink_body_left_p.style.pointerEvents = 'none';
    
                            const drink_body_left_span = document.createElement('span');
                            drink_body_left_span.classList.add('col-12','d-flex', 'w-100', 'ps-2', 'card-body-price');
                            drink_body_left_span.innerHTML = info.precio.toFixed(2) + " €";
                            drink_body_left_span.style.pointerEvents = 'none';
    
                        drink_body_left.appendChild(drink_body_left_p);
                        drink_body_left.appendChild(drink_body_left_span);
    
                        const drink_body_right = document.createElement('div');
                        drink_body_right.classList.add('d-flex', 'flex-row', 'justify-content-end', 'col-4');
                        drink_body_right.style.pointerEvents = 'none';
    
                            const drink_body_right_button = document.createElement('button');
                            drink_body_right_button.classList.add('add', 'btn', 'btn-outline-dark', 'me-2', 'd-flex', 'justify-content-center', 'align-items-center');
                            drink_body_right_button.setAttribute('type', 'button');
                            drink_body_right_button.setAttribute('marcador', info.id);
                            $(drink_body_right_button).on("click", addProductToCart);
                            drink_body_right_button.style.pointerEvents = 'auto';
    
                                const drink_body_right_button_i = document.createElement('i');
                                drink_body_right_button_i.classList.add('fa-solid', 'fa-bag-shopping');
                                drink_body_right_button_i.style.pointerEvents = 'none';
    
                            drink_body_right_button.appendChild(drink_body_right_button_i);
                        
                        drink_body_right.appendChild(drink_body_right_button);
    
                    drink_body.appendChild(drink_body_left);
                    drink_body.appendChild(drink_body_right);
    
                drink.appendChild(drink_img);
                drink.appendChild(drink_body);

            DOMitems.appendChild(drink);
            }
        });
    }
    renderizarProductos();
}