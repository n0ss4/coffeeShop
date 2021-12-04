$(document).on('click', function(event){
    console.log({event_target: event.target});
   if(event.target.tagName == "BUTTON" && $(event.target).hasClass("card-body-button")){
     addProductToCart(event);
   }else if(event.target.tagName == "A" && $(event.target).hasClass("card-top")){
     window.open("promotion.html", "_self");
   }
 });