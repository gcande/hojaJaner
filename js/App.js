$(document).ready(function(){
    $('.SegundoField, .TercerField').hide();

    $('#Datos').on('click', function(){
        $('.SegundoField').slideToggle();
    });

    $('#Informacion').on('click', function(){
        $('.TercerField').slideToggle();
    });
});


function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var Nombres = document.getElementById('Nombres');
var PrimerApellido = document.getElementById('PrimerApellido');
var SegundoApellido = document.getElementById('SegundoApellido'); 
var Firma = document.getElementById('Firma');


Nombres.addEventListener('keyup', (event) => {
    var InputText = event.path[0].value;
    document.querySelector('.toUpper').innerHTML = InputText;
});

PrimerApellido.addEventListener('keyup', (event) => {
    var InputText = event.path[0].value;
    document.querySelector('.toUpperTwo').innerHTML = InputText;
});

SegundoApellido.addEventListener('keyup', (event) => {
    var InputText = event.path[0].value;
    document.querySelector('.toUpperTree').innerHTML = InputText;
});