window.onload = function () {
    const miLocalStorage = window.localStorage;
    let nameStorage;
    if (miLocalStorage.getItem('name') !== null) {
        // Carga la información
        nameStorage = JSON.parse(miLocalStorage.getItem('name'));
    }
    document.getElementById("name").innerHTML="Bones "+nameStorage+", Que et ve de gust?";
}