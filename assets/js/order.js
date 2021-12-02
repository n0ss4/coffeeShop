window.onload = function () {

    const miLocalStorage = window.localStorage;
    nameStorage = JSON.parse(miLocalStorage.getItem('name'));

    let nameStorage;
    if(document.getElementById('name').value==null){
        //window.location.href = "index.html";
        document.getElementById("name").innerHTML=nameStorage;

    }
    if (miLocalStorage.getItem('name') !== null) {
        document.getElementById("name").innerHTML=nameStorage;
    }else{
        window.location.href = "index.html";
    }
}