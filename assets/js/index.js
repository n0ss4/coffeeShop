function guardardades(){
    const miLocalStorage = window.localStorage;
    console.log("ei")
    let name= document.getElementById("name").value;
    let date=document.getElementById("date").value;
    miLocalStorage.setItem('name', JSON.stringify(name));
    miLocalStorage.setItem('date', JSON.stringify(date));
}