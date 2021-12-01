window.onload = function () {



    console.log("I am the second log");
    const miLocalStorage = window.localStorage;
    let nameStorage;
    if (miLocalStorage.getItem('name') !== null) {
        nameStorage = JSON.parse(miLocalStorage.getItem('name'));
        document.getElementById("name").innerHTML="Bones "+nameStorage+", Que et ve de gust?";
    }else{
        document.getElementById("name").innerHTML="Bones has de indicar el teu nom i la hora, et redirigirem";
        setTimeout(function(){
            console.log("I am the third log after 5 seconds");
        },2000);
        window.location.replace("index.html");

    }
}