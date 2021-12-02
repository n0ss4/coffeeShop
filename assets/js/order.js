window.onload = function () {
    let nameStorage;

    const miLocalStorage = window.localStorage;
    nameStorage = JSON.parse(miLocalStorage.getItem('name'));

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