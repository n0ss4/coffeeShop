window.onload = function () {
    // Variables

    const DOMitems = document.querySelector('#items');//Aigua
    const DOMitems1 = document.querySelector('#items1');//Cervesa
    const DOMitems2 = document.querySelector('#items2');//Beguda
    const DOMitems3 = document.querySelector('#items3');//suc


    /**
     * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
     */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info.precio + '€';
            // Boton
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            if(info.categoria=='aigua'){
                DOMitems.appendChild(miNodo);
            }else if(info.categoria=='cervesa'){
                DOMitems1.appendChild(miNodo);
            }else if(info.categoria=='beguda'){
                DOMitems2.appendChild(miNodo);
            }else if(info.categoria=='suc'){
                DOMitems3.appendChild(miNodo);
            }

        });


    }


    renderizarProductos();
}