$(document).on('click', function(event){
   if(event.target.tagName == "BUTTON" && $(event.target).hasClass("card-body-button")){
        addProductToCart(event);
   }else if(event.target.tagName == "A" && $(event.target).hasClass("card-top")){
        showModal(event);
   }
 });

window.onload = function () {
    let nameStorage;

    const miLocalStorage = window.localStorage;
    nameStorage = JSON.parse(miLocalStorage.getItem('name'));

    if(document.getElementById('name').value==null){
        document.getElementById("name").innerHTML=nameStorage;

    }
    if (miLocalStorage.getItem('name') !== null) {
        document.getElementById("name").innerHTML=nameStorage;
    }else{
        window.location.href = "index.html";
    }
}