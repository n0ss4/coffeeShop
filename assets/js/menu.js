var carrito = [];
const miLocalStorage = window.localStorage;

function recopilarMenu(){

    if(document.getElementById('flexRadioPrimer1').checked) {
        carrito.push("100");
    }
    if(document.getElementById('flexRadioPrimer2').checked){
        carrito.push("101");
    }
    if(document.getElementById('flexRadioPrimer3').checked){
        carrito.push("102");
    }
    if(document.getElementById('flexRadioSegon1').checked){
        carrito.push("103");
    }
    if(document.getElementById('flexRadioSegon2').checked){
        carrito.push("104");
    }
    if(document.getElementById('flexRadioSegon3').checked){
        carrito.push("105");
    }
    if(document.getElementById('flexRadioPostre1').checked){
        carrito.push("106");
    }
    if(document.getElementById('flexRadioPostre2').checked){
        carrito.push("107");
    }
    if(document.getElementById('flexRadioPostre3').checked){
        carrito.push("108");
    }
    if(document.getElementById('flexRadioBeguda1').checked){
        carrito.push("109");
    }
    guardarCarritoEnLocalStorage();

}

window.onload = function () {

    document.getElementById("flexRadioPrimer1id").innerHTML = baseDeDatos.find(o => o.id == "100").nombre;
    document.getElementById("flexRadioPrimer2id").innerHTML = baseDeDatos.find(o => o.id == "101").nombre;
    document.getElementById("flexRadioPrimer3id").innerHTML = baseDeDatos.find(o => o.id == "102").nombre;

    document.getElementById("flexRadioSegon1id").innerHTML = baseDeDatos.find(o => o.id == "103").nombre;
    document.getElementById("flexRadioSegon2id").innerHTML = baseDeDatos.find(o => o.id == "104").nombre;
    document.getElementById("flexRadioSegon3id").innerHTML = baseDeDatos.find(o => o.id == "105").nombre;

    document.getElementById("flexRadioPostre1id").innerHTML = baseDeDatos.find(o => o.id == "106").nombre;
    document.getElementById("flexRadioPostre2id").innerHTML = baseDeDatos.find(o => o.id == "107").nombre;
    document.getElementById("flexRadioPostre3id").innerHTML = baseDeDatos.find(o => o.id == "108").nombre;

    document.getElementById("flexRadioBegudaid").innerHTML = baseDeDatos.find(o => o.id == "109").nombre;

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
