var currentChunk = 0;
var chunks = 5;

$('.alert').click(function() {
    $(".alert").alert('close');
    localStorage.removeItem('carrito');
    localStorage.removeItem('name');
    localStorage.removeItem('date');
    window.location.href = "index.html";
});

$('.alert').hover(function() {
    window.clearInterval(timer);
    window.clearTimeout(time);
    $(".alert").css('opacity', 1);
}, function() {
    $(".alert").css('opacity', .9);
    timer = setInterval(function() {
        update();
    }, 10);
});

var timer = setInterval(function() {
    update();
}, 10);

var time = window.setTimeout(function() {
    $(".alert").fadeTo(1000, 0).slideUp(1000, function() {
        $(this).remove();
    });
}, ((chunks - currentChunk) * 1000));

function update() {
    currentChunk += 0.01;
    var progPercent = 100 - (currentChunk * (100 / chunks));
    $(".progress-bar").css('width', progPercent + '%').attr('aria-valuenow', progPercent);

    if (progPercent <= 0) {
        $(".alert").remove();
    }

    if (currentChunk >= 5) {
        window.clearInterval(timer);
    }
}

