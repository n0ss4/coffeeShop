function guardardades(){
    const miLocalStorage = window.localStorage;
    let name= document.getElementById("name").value;
    let date=document.getElementById("date").value;
    miLocalStorage.setItem('name', JSON.stringify(name));
    miLocalStorage.setItem('date', JSON.stringify(date));
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  // timepicker
  $(document).ready(function(){
    $('#date').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '8:00am',
        maxTime: '6:00pm',
        defaultTime: '12',
        startTime: '8:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});