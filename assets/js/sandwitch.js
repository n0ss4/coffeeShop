window.onload = function () {
    const DOMitems = document.querySelector('#items');
    const DOMitems1 = document.querySelector('#items1');
    const DOMitems2 = document.querySelector('#items2');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoIngredientes = document.createElement('p');
            const dins= document.createElement('i');
            miNodoIngredientes.appendChild(dins);
            dins.classList.add('card-title');
            dins.textContent = "Ingredients: "+info.ingredients;
            const miNodoVegeteria= document.createElement('img');

            if(info.vegeteria){
                miNodoVegeteria.classList.add('img-fluid');
                miNodoVegeteria.style.height='20px';
                miNodoVegeteria.style.width='20px';
                miNodoVegeteria.setAttribute('src','assets/img/vegan.png');
            }

            if(info.celiac){

            }

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info.precio + '€';
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoIngredientes);
            if(info.vegeteria){
                miNodoCardBody.appendChild(miNodoVegeteria);
            }
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            if(info.categoria=='biquini'){
                DOMitems.appendChild(miNodo);
            }else if(info.categoria=='llom'){
                DOMitems1.appendChild(miNodo);
            }else if(info.categoria=='truita'){
                DOMitems2.appendChild(miNodo)
            }
        });
    }
    renderizarProductos();
}