let cont = 0;
$("#formularioSuscribirse").submit(function (){
    //evita que se refresque la pagina
    alert("Gracias por suscribirte a Vaetics, próximamente estarás recibiendo noticias importantes en tu email");
});
$("#formularioContacto").submit(function (){
    alert("Gracias por ponerte en contacto con nosotros, en breve estaremos atendiendo tu consulta y poniéndonos en contacto contigo");
});
$(".registrate").click(function (e){
    //evita que se refresque la pagina
    e.preventDefault();
    if(cont==0){
        $("#login").css("display", "none");
        $("#registro").css("display", "block");
        cont++;
    }else{
        $("#login").css("display", "block");
        $("#registro").css("display", "none");
        cont--;
    }
    
});

