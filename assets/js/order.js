window.onload = function () {



    console.log("I am the second log");
    const miLocalStorage = window.localStorage;
    let nameStorage;
    if (miLocalStorage.getItem('name') !== null) {
        nameStorage = JSON.parse(miLocalStorage.getItem('name'));
        document.getElementById("name").innerHTML=nameStorage;
    }else{
        window.location.href = "index.html";
    }
    
}