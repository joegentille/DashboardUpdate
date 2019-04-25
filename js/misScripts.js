$(function(){
    var boton = $('#btn-menu');
    var enlaces = $('#menuLateral');
    /* var fondo_enlace = $('#') */
    boton.on('click', function(){
        if(enlaces.css('display','block')){
            /* enlaces.css('display','none'); */
            enlaces.css('min-width','auto');
            $('.barra-lateral .logo').css('display','none');

        }else{
            /* enlaces.css('display','block'); */
        }
        /* alert("Hola"); */
    });
}())

/* function myFunction() {
    var x = document.getElementById("enlacesMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} */